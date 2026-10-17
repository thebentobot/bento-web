# Bento Web

The website for [Bento](https://bentobot.xyz), built with Astro and Svelte and deployed to Cloudflare Workers. Uses [dotBento's Web API](https://github.com/thebentobot/dotBento/tree/master/src/dotBento.WebApi) for bot data and Better Auth with Discord OAuth and Cloudflare D1 for sign-in.

## Local development

Use Node 24.22.0 or newer, as required by `package.json`.

```sh
npm install
cp .env_example .env
```

Configure `.env`:

- `API_URL` and `API_KEY`: the dotBento API base URL and its `X-Api-Key` value.
- `BETTER_AUTH_SECRET`: the authentication secret.
- `BETTER_AUTH_URL`: `http://localhost:4321` for local development.
- `BETTER_AUTH_TRUSTED_ORIGINS`: additional allowed origins, separated by commas.
- `DISCORD_CLIENT_ID` and `DISCORD_CLIENT_SECRET`: Discord OAuth credentials.

Register `http://localhost:4321/api/auth/callback/discord` as a redirect URL in your Discord application.

Apply the existing migrations to local D1, then start Astro:

```sh
npm run db:migrate:local
npm run dev
```

Open `http://localhost:4321`.

## Database

The schema is in `src/db/schema.ts`; migrations are in `drizzle/`. The runtime database uses the `DB` binding in [wrangler.jsonc](wrangler.jsonc).

After changing the schema:

```sh
npm run db:generate
npm run db:migrate:local
```

Remote database scripts use `CLOUDFLARE_ACCOUNT_ID` and `CLOUDFLARE_D1_TOKEN` exported in your shell. See [docs/database.md](docs/database.md) for SQL execution and remote migration commands.

## Development commands

```sh
npm run lint
npm run lint:fix
npm run format
npm test
npm run build
```

Use Conventional Commits for commit messages.

## Deployment

Configure the D1 binding in `wrangler.jsonc` and the API and auth variables in Cloudflare for the target environment.

```sh
npm run deploy:staging
npm run deploy:production
```

Both commands build the site before deploying. `npm run preview` builds and starts a remote Wrangler preview.

Licensed under AGPL-3.0. See [LICENSE](LICENSE). Avatar illustration by [Dan](https://twitter.com/dannalanart).
