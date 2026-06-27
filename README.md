# Bento Web

[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white)](https://conventionalcommits.org)

This website is for [Bento Bot](https://github.com/thebentobot/dotBento) a Discord bot with server moderation tools and various entertaining commands.

The Bento Bot website is created with [Astro](<[https://reactjs.org/](https://astro.build/)>) and [Svelte](https://svelte.dev/).

## Getting Started

### Dependencies

- An external API with routes that provides the data as shown in the interfaces, in this case it's the API defined in [Bento Bot's WebApi](https://github.com/thebentobot/dotBento/tree/master/src/dotBento.WebApi). Documentation on workarounds when contributing etc. will be added very soon™️.
- For auth, the code is quite entangled with [Better Auth](https://better-auth.com/), where the database is provided by [Cloudflare D1](https://www.cloudflare.com/products/d1/). As this is a Discord bot website, the auth provider is Discord.

### Installing Bento web

- `git clone https://github.com/thebentobot/bento-web.git`.
- `npm install` assuming you have installed [node.js](https://nodejs.org/en/)
- Create a [dotenv](https://www.npmjs.com/package/dotenv) file with the environment variables:

```
API_URL=
API_KEY=
BETTER_AUTH_SECRET=
BETTER_AUTH_TRUSTED_ORIGINS=
BETTER_AUTH_URL=
CLOUDFLARE_ACCOUNT_ID=
CLOUDFLARE_D1_TOKEN=
CLOUDFLARE_DATABASE_ID=
DISCORD_CLIENT_ID=
DISCORD_CLIENT_SECRET=
```

### Running Bento web

- `npm run dev`

## Database workflow

This repo uses Drizzle Kit to generate SQL and Wrangler to apply it to Cloudflare D1. See docs/database.md for full details.

Quick reference:

- Generate SQL from schema: `npm run db:generate`
- Apply locally: `npm run db:execute:local -- --file ./drizzle/<migration>.sql`
- Apply remotely: `npm run db:execute -- --file ./drizzle/<migration>.sql`

## Development

This website is mainly developed by [Christian](https://github.com/banner4422).

Pull requests are very welcome if the features/changes makes sense and are up to par in quality.

## License

This project is licensed under the [AGPL-3.0 License](https://github.com/thebentobot/bento-web/blob/1.0/LICENSE)

The avatar illustration is done by [Dan](https://twitter.com/dannalanart).
