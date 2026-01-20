# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Bento Web is the website for Bento Bot, a Discord bot. Built with Astro (SSR mode), Svelte 5, and TailwindCSS 4, deployed to Cloudflare Workers with D1 database.

## Common Commands

```bash
npm run dev          # Start dev server (Astro on port 4321)
npm run build        # Build for production
npm run preview      # Build and run with wrangler (remote preview)
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format with Prettier
```

### Database (Drizzle + Cloudflare D1)

```bash
npm run db:generate         # Generate SQL from schema changes
npm run db:migrate:local    # Apply migrations locally
npm run db:migrate          # Apply migrations to remote D1
npm run db:execute:local -- --file ./drizzle/<migration>.sql  # Execute specific SQL locally
npm run db:execute -- --file ./drizzle/<migration>.sql        # Execute specific SQL remotely
```

Database schema is defined in `src/db/schema.ts`. After schema changes: generate SQL, apply locally, test, then apply remotely.

## Architecture

### Runtime Environment

- **Cloudflare Workers** with D1 database binding (`DB`)
- Environment variables via Cloudflare (not `.env` in production): `API_URL`, `API_KEY`, `BETTER_AUTH_*`, `DISCORD_CLIENT_*`
- `wrangler.jsonc` configures D1 binding and Worker settings

### Authentication Flow

- **better-auth** library with Discord OAuth
- Auth setup: `src/library/auth.ts` creates auth instance with D1 adapter
- Middleware (`src/middleware.ts`) attaches `user` and `session` to `context.locals`
- Auth API routes: `src/pages/api/auth/[...all].ts`
- Custom Discord profile fields stored in user table (discordId, discordUsername, etc.)

### Data Flow

- External Bento API accessed via `src/library/server/bentoApi.ts` (server-side only)
- Astro Server Actions in `src/actions/index.ts` for authenticated operations (e.g., profile saving)
- DTOs use PascalCase (ProfileDto) but API may return camelCase; `normalizeProfileDto` handles conversion

### Component Structure

- `src/layouts/app/` - Core layout components (AppLayout, Navigation, Footer)
- `src/components/` - Feature components organized by domain (auth, homepage, profile, leaderboard)
- Svelte components use Svelte 5 runes syntax
- Icons via `astro-icon` and custom SVGs in `src/icons/`

### Type System

- `src/env.d.ts` - Cloudflare environment types, Astro Locals interface
- `src/library/types/interfaces.ts` - API DTOs (ProfileDto, LeaderboardUserDto, etc.)
- `src/library/auth.ts` - Extended BentoBetterAuthUser type with Discord fields

## Key Patterns

- Server-only code must check `typeof window !== "undefined"` and throw if called client-side
- Profile API requires UserId as numeric literal in JSON (handled by `buildProfilePayload`)
- Astro pages use `.astro` extension; interactive components use Svelte
- Mode switching (dark/light) via `mode-watcher` package
