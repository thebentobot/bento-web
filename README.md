# This repository has been archived in favour for the [new Bento website repository](https://github.com/thebentobot/bento-the-website)
# [Invite the Discord bot Bento 🍱 to your own server here!](https://discord.com/api/oauth2/authorize?client_id=787041583580184609&permissions=1644167687254&scope=bot%20applications.commands)

# Website for Bento 🍱

This website is for [Bento 🍱](https://github.com/thebentobot/bentoTS) a Discord bot with server moderation tools and various entertaining commands.

The Bento 🍱 website is written in TypeScript and powered by the [React](https://reactjs.org/) Framework [Next.js](https://nextjs.org/), with CSS from [tailwindcss](https://tailwindcss.com/), and a [PostgreSQL](https://www.postgresql.org/) database.

## List of website features

- [Front page with statistics and information
](https://bentobot.xyz/)
- [About page that explains the background for the Discord bot and what technologies are used](https://bentobot.xyz/about)

- [Support page that shows Patrons on Patreon and how this project uses support](https://bentobot.xyz/setup)

- [Setup page that shows what happens when the bot joins a server and what to do](https://bentobot.xyz/setup)

- [Commands page that shows a list of all Bento commands, some with practical examples.](https://bentobot.xyz/commands)

- [Leaderboard page that shows the global leaderboard for Bento](https://bentobot.xyz/leaderboard)

- [Dynamic route for the leaderboard page, that shows the leaderboard for a server.](https://bentobot.xyz/leaderboard/714496317522444352)

## Getting Started

### Dependencies

* A [PostgreSQL](https://www.postgresql.org/) Database, or any database where you can store total user count, total server count, and global leaderboard data (perhaps per server too if you want to support dynamic routing).

### Installing the database side of Bento 🍱

* Either locally run/install [PostgreSQL](https://www.postgresql.org/) or get a PostgreSQL database elsewhere. Other SQL databases may be possible considering Bento uses [Sequelize](https://sequelize.org/), but it is not tested and isn't recommended because the code may use PostgreSQL specific features, and it requires additional changes to the code. May be possible to use NoSQL with refactoring of code.
* The creation of the database tables. An SQL DDL schema file can be found [here](https://github.com/thebentobot/bentoTS/blob/master/src/database/DDL.sql)

### Installing Bento 🍱 web

* ```git clone https://github.com/thebentobot/bento-web.git``` or download ZIP.
* ```npm install``` assuming you have installed [node.js](https://nodejs.org/en/)
* Create a [dotenv](https://www.npmjs.com/package/dotenv) file with the environment variables: ```DBdatabase=[NAME OF YOUR DATABASE]```, ```DBusername=[NAME OF YOUR DATABASE user]```, ```DBpassword=[PASSWORD FOR YOUR DATABASE USER]``` and ```host=[IP FOR YOUR DATABASE]```

### Executing Bento 🍱

* ```npm run build```
* ```npm start```

## Development

This website is mainly developed by [Christian](https://github.com/banner4422).

Pull requests are very welcome if the features/changes makes sense and are up to par in quality.

## License

This project is licensed under the [AGPL-3.0 License](https://github.com/thebentobot/bento-web/blob/1.0/LICENSE)

The avatar illustration is done by [Freepik](http://www.freepik.com).
