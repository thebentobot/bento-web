# Database workflow: Drizzle Kit + Cloudflare D1 via Wrangler

This project uses Cloudflare D1 in runtime and Drizzle Kit for schema-driven SQL generation.

You edit your schema in TypeScript, generate SQL with Drizzle Kit, and then apply that SQL to D1 using Wrangler.

- Runtime DB: Cloudflare D1 (bound as `DB` in `wrangler.jsonc`)
- ORM: Drizzle ORM (D1 driver)
- SQL generation: Drizzle Kit
- Application of SQL: `wrangler d1 execute` (local or remote)

## Prerequisites

- Node & npm
- Wrangler CLI (see `devDependencies`): `npm i -D wrangler`
- Cloudflare account credentials for remote ops:
    - `CLOUDFLARE_ACCOUNT_ID`
    - `CLOUDFLARE_D1_TOKEN` (used by npm scripts as `CLOUDFLARE_API_TOKEN`)
- D1 database binding configured in `wrangler.jsonc`:

```
"d1_databases": [
  {
    "binding": "DB",
    "database_name": "bento-web-db",
    "database_id": "...",
    "migrations_dir": "drizzle"
  }
]
```

## Source of truth

- Define and evolve your schema in `src/db/schema.ts`.
- Runtime Drizzle uses the D1 binding via `src/db/index.ts`:

```ts
import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";
export const getDb = (d1: D1Database) => drizzle(d1, { schema });
```

## Generate SQL from the schema

Use Drizzle Kit to emit SQL files into `./drizzle`:

- Via npm script (preferred):
    - `npm run db:generate`
- Or directly:
    - `npx drizzle-kit generate`

Drizzle Kit reads `drizzle.config.ts`. The `dbCredentials.url` that points to `file:local.db` is only for Drizzle Kit tooling (migrations/typegen) — it is not used by the app at runtime.

## Apply SQL to D1

Choose local or remote. All examples use your configured D1 name: `bento-web-db`.

- Local (inside `wrangler dev` environment):
    - Single file:
        - `npm run db:execute:local -- --file ./drizzle/0001_add_users.sql`
    - Ad‑hoc SQL:
        - `npm run db:execute:local -- --command "PRAGMA table_info('users');"`

- Remote (Cloudflare):
    - Single file:
        - `npm run db:execute -- --file ./drizzle/0001_add_users.sql`
    - Ad‑hoc SQL:
        - `npm run db:execute -- --command "SELECT count(*) FROM users;"`

Notes:

- `npm run db:execute*` scripts are wrappers around `wrangler d1 execute bento-web-db` (see `package.json`).
- You can run multiple files in order by invoking the command multiple times.

Alternative: use D1's migrations apply flow

- Local: `npm run db:migrate:local` (wrangler d1 migrations apply bento-web-db --local)
- Remote: `npm run db:migrate` (wrangler d1 migrations apply bento-web-db --remote)
- Keep your SQL files under `drizzle/` (migrations_dir in wrangler.jsonc).

This repository documents the simpler "execute generated SQL" path by default, but the scripts above are available if you prefer the migrations apply workflow.

## Typical dev flow

1. Edit `src/db/schema.ts`.
2. Generate SQL: `npm run db:generate` (outputs to `./drizzle`).
3. Apply locally to your wrangler dev DB: `npm run db:execute:local -- --file ./drizzle/<latest>.sql`.
4. Test locally (`npm run dev`).
5. When satisfied, apply remotely: `npm run db:execute -- --file ./drizzle/<latest>.sql`.

## Resetting or seeding (optional)

- Reset (destructive):
    - `npm run db:execute:local -- --command "DROP TABLE IF EXISTS users;"`
- Seed example:
    - `npm run db:execute:local -- --command "INSERT INTO users (id, name) VALUES ('u1', 'Demo');"`

## Environment notes

- Runtime URLs in auth: set `BETTER_AUTH_URL` and optionally `BETTER_AUTH_TRUSTED_ORIGINS` in `wrangler.jsonc` (or your env) to control allowed origins.
- No separate Node SQLite driver is used in runtime; only D1.

## Troubleshooting

- "no such table": ensure you ran `db:generate` and applied the new SQL to the correct target (local vs remote) and DB name matches `wrangler.jsonc`.
- Permissions on remote: ensure `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_D1_TOKEN` are exported in your shell when running the remote scripts.
