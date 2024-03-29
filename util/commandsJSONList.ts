interface commandsInterface {
	name: string;
	aliases: string[];
	category: string;
	description: string;
	usage: string;
}

interface commandsCategoryInterface {
	category: string;
	description: string;
}

export const commandsCategoryList: commandsCategoryInterface[] = [
	{
		category: "Admin",
		description:
			"Server settings where you can e.g. enable role management, welcome messages and disable the leaderboard. These commands requires certain role permissions, which are specified for each command.",
	},
	{
		category: "Features",
		description: "Fun, entertaining and practical commands.",
	},
	{
		category: "Info",
		description: "Info about users, list of emotes and roles, list of commands and help for each command.",
	},
	{
		category: "User",
		description:
			"Users focused commands such as the Bento 🍱 command, leaderboard, set reminders and notification, or check rank.",
	},
];

export const commandsList: commandsInterface[] = [
	{
		name: "announcement",
		aliases: ["announce"],
		category: "admin",
		description:
			"Create announcements in specific channels at specific times and Bento will deliver them for you.\nYou can either use ''every'' e.g. every 2 day and Bento will send out the announcement every 2nd day, or use schedule to specify a specific time and date to make an announcement. \nUse list to see a list of your reminders. \nAs long as it does not surpass the limit of 2000 characters, images are possible.",
		usage:
			"?announcement every <amount of time> <timeframe> <channel> <announcement> E.g. announcement 1 week 714920591429337109 IT IS FRIDAY\n?announcement schedule <DD-MM-YYYY> <HH:mm> <timezone offset> <channel> <announcement> E.g. announcement schedule 25-11-2021 08:00 +02:00 714827566992850964 it is Banner's birthday 🥺\n?announcement list to see a list of your announcements\n?announcement delete <every/schedule> <announcement id> to delete an announcement\n?announcement edit <every/schedule> <announcement id> <column> <content> to edit a specific part of an announcement. The bot will inform you about possible columns.",
	},
	{
		name: "gfycat",
		aliases: [],
		category: "features",
		description:
			"Various Gfycat features. Create GIFs with video URLs or video attachments, get gfycat user profiles or feeds, get info about a gfycat post, or search for gfycat posts just like the gif command.",
		usage:
			"?gfycat create <video url, or attachment> [--full if you want the whole video as a gif. If this is added, no need to specify start seconds and duration] <seconds to start at> <duration of the gif> [title of your gfycat post]\n?gfycat user profile <gfycat username>\n?gfycat user feed <gfycat username> [count number between 1-30]\n?gfycat info <gfycat post name e.g. naiveamusingfritillarybutterfly>\n?gfycat search <search input> [--multi [--count <number between 1-30>]]",
	},
	{
		name: "bye",
		aliases: [],
		category: "admin",
		description:
			"Bye message settings, for when a member leaves.\nDisabled by default and only works by assigning <channel> and <content>.\n{user} or {usertag} - mention user\n{username} - mention username\n{discriminator} - mention the #0000 for the user\n{server} - mention server\n{memberCount} - the member count\n{space} - adds a new line\nUse reverse / (slash) in front of a channel e.g. for linking to a rules channel.",
		usage: "?bye status\n?bye channel <channelID>\n?bye message <content>\n?bye delete",
	},
	{
		name: "leaderboardsettings",
		aliases: ["lbs"],
		category: "admin",
		description: "Enable or disable the XP and levelling system on this server.",
		usage: "?leaderboardsettings <enable/disable/status>",
	},
	{
		name: "leaderboard",
		aliases: ["ranking", "rankings", "lb"],
		category: "user",
		description: "Shows the XP/level leaderboard for a server, globally for the bot, or global/local Bentos 🍱",
		usage:
			"?leaderboard [global] to see message/xp leaderboard, where the global argument shows globally for the bot.\n?leaderboard bento [global] shows leaderboard for the amount of Bento 🍱 with a global option as well.\n?leaderboard rps [paper, rock, scissors, all] [wins, ties, losses] shows the server leaderboard for the RPS game, where it's possible to order by wins, ties and losses. By adding global before rock, paper and scissor, it is then possible to view the global leaderboard.",
	},
	{
		name: "media",
		aliases: [],
		category: "admin",
		description: "Enable or disable the gif command on this server.",
		usage: "?media <enable/disable/status>",
	},
	{
		name: "prefix",
		aliases: [],
		category: "admin",
		description: "Sets the prefix for this server.",
		usage: "?prefix <newPrefix>",
	},
	{
		name: "settings",
		aliases: [],
		category: "admin",
		description: "Sends an overview of the server settings",
		usage: "?settings",
	},
	{
		name: "welcome",
		aliases: [],
		category: "admin",
		description:
			"welcome message settings, for when a member joins.\nDisabled by default and only works by assigning <channel> and <content>.\n{user} or {usertag} - mention user\n{username} - mention username\n{discriminator} - mention the #0000 for the user\n{server} - mention server\n{memberCount} - the member count\n{space} - adds a new line\nUse reverse / (slash) in front of a channel e.g. for linking to a rules channel.",
		usage: "?welcome <status>\n?welcome <channel> <channelID>\n?welcome <msg/message> <content>\n?welcome <delete>",
	},
	{
		name: "horoscope",
		aliases: ["horo", "astro", "zodiac", "hs"],
		category: "features",
		description:
			"Provides a horoscope based on day and sign. If you search signs, it provides a list of signs and their date range",
		usage:
			"?horoscope signs\n?horoscope <save> <sign>\n?horoscope <[today]/tomorrow/yesterday> [sign or a user mention/id]\n?horoscope list\n?horoscope search <query>",
	},
	{
		name: "lastfm",
		aliases: ["fm", "lf"],
		category: "features",
		description:
			"last.fm feature. If you don't mention a user with an argument, it searches for your last.fm. If you only mention a user and no time period, it checks for overall.\nThe possible time period arguments: overall/all, 7day/week, 1month/month, 3month, 6month, 12month/year.",
		usage:
			"?lastfm set <lastfm account name>\n?lastfm remove <lastfm account name>\n?lastfm [np] [user id or mention a user]\n?lastfm toptracks/tt [time period, or user where time period = overall] [user id or mention a user]\n?lastfm topalbums/tal [time period, or user where time period = overall] [user id or mention a user]\n?lastfm topartists/ta [time period, or user where time period = overall] [user id or mention a user]\n?lastfm recent [user id or mention a user]\n?lastfm profile [user id or mention a user]\n?lastfm collage <topalbums, toptracks or topartists> [time period or user or collage size] [user or collage size] [collage size]",
	},
	{
		name: "support",
		aliases: ["patreon", "kofi", "topgg"],
		category: "info",
		description: "How to support Bento 🍱",
		usage: "?support",
	},
	{
		name: "tag",
		aliases: ["t"],
		category: "features",
		description: "Add, delete, search, edit tags, get info about a tag or a list of all tags on a server",
		usage:
			"?tag <tag name>\n?tag add <tag name> <tag content>\n?tag delete <tag name>\n?tag edit <tag name> <tag content being edit>\n?tag info <tag name>\n?tag list\n?tag random [search query]\n?tag rename <tag name> <new tag name>\n?tag search <query>\n?tag author [mention a user or userID]\n?tag top",
	},
	{
		name: "urban",
		aliases: [],
		category: "features",
		description: "Search for definitions on Urban dictionary",
		usage: "?urban <search input>",
	},
	{
		name: "weather",
		aliases: [],
		category: "features",
		description:
			"Displays info about the weather at the city saved for the user, or at the specified city.\nIf it shows a city from another country than the one you expected, try to add a country code (e.g. US, GB, DE) beside the city (remember a comma after city), as shown below\nIf it does not show up either, it may not be included in the OpenWeather API.",
		usage: "?weather\n?weather [save] <city>, [country code]",
	},
	{
		name: "avatar",
		aliases: ["pfp"],
		category: "info",
		description:
			"Shows user's avatars, or your own if you don't mention anyone. You can also check the server avatar and banner.",
		usage: "?avatar [userID or mention a user]\n?avatar server\n?avatar banner",
	},
	{
		name: "commands",
		aliases: [],
		category: "info",
		description: "Displays a full list of bot commands categorised",
		usage: "?commands",
	},
	{
		name: "emotes",
		aliases: ["emote"],
		category: "info",
		description: "Shows list of emotes from the server.",
		usage: "?emotes\n?emotes animated\n?emotes static",
	},
	{
		name: "github",
		aliases: [],
		category: "info",
		description: "Link to the Bento GitHub organisation",
		usage: "?github",
	},
	{
		name: "help",
		aliases: ["about"],
		category: "info",
		description: "Displays bot help message or info for a command",
		usage: "?help\n?help [command name]",
	},
	{
		name: "ping",
		aliases: [],
		category: "info",
		description: "Shows the latency for Bento Bot, the Discord API and the bot's database in PostgreSQL",
		usage: "?ping",
	},
	{
		name: "roles",
		aliases: [],
		category: "info",
		description: "Shows list of roles on the server.",
		usage: "?roles",
	},
	{
		name: "serverinfo",
		aliases: [],
		category: "info",
		description: "Displays info about the current server.",
		usage: "?serverinfo",
	},
	{
		name: "whois",
		aliases: ["userinfo", "user"],
		category: "info",
		description: "Displays info about the mentioned user or the user who uses the command.",
		usage: "?whois <@user/userID>",
	},
	{
		name: "bento",
		aliases: ["bentobox", "🍱"],
		category: "user",
		description: "Give a Bento Box 🍱 to your friend every 12th hour :D.",
		usage: "?bento [<user>]",
	},
	{
		name: "web",
		aliases: [],
		category: "info",
		description: "Link to the Bento 🍱 website",
		usage: "?web",
	},
	{
		name: "notification",
		aliases: ["noti", "notify"],
		category: "user",
		description:
			"Get a notification when someone mentions a specific word or sentence. You can enable it for the server you write the command from, or enable it globally to get it from all servers who has Bento. When adding a notification, add ''--global'' if you want to get notified when someone mentions the word on all Bento servers.",
		usage:
			"?notification add <content>\n?notification delete <content>\n?notification list\n?notification global <content>",
	},
	{
		name: "rank",
		aliases: ["profile", "level"],
		category: "user",
		description:
			"Shows a user's profile which includes ranks for levels and bento, description and potentially other personalisation.",
		usage: "?rank [userID/mention a user]",
	},
	{
		name: "sketch",
		aliases: [],
		category: "user",
		description:
			"Customise your profile for the rank command. Add background picture, change every colour, add birthday and timezone, and a funny description.",
		usage: `?sketch bgpic <image URL>\n?sketch desc <add/colour/opacity/status> <description text / hex colour / 0-100>\n?sketch timezone <tz database value, e.g. "Europe/Copenhagen">\n?sketch birthday <birthday e.g. "25 November">\n?sketch username <hex color>\n?sketch discriminator <hex color>\n?sketch overlay <colour/opacity/status> <hex colour/ 0-100>\n?sketch bgcolour <colour/opacity/status> <hex colour / 0-100>\n?sketch fm <toggle/bg/status/song/artist> <colour/opacity> <hex colour / 0-100>\n?sketch xpboard <toggle/bg/status/text/bar/barbg/text1/text2/bar1/bar2/barbg1/barbg2> <colour/opacity> <hex colour / 0-100>\n?sketch sidebar <opacity/colour/blur/rank/users/status> <hex colour/ 0-100 / number for blur amount / if it is rank or users you need to specify if it is either the server, global, bento or timezone row, before writing colour> <hex colour for rank and users>\n?sketch delete`,
	},
	{
		name: "8ball",
		aliases: [],
		category: "features",
		description: "Ask Bento a question and you will get an answer",
		usage: `?8ball <question>`,
	},
	{
		name: "choose",
		aliases: [],
		category: "features",
		description: "Make Bento choose one of the options",
		usage: `?choose <option 1> <option 2> <option ∞>`,
	},
	{
		name: "colour",
		aliases: ["color"],
		category: "features",
		description: "Make Bento send a picture of the hexcode/RGB colour you sent",
		usage: `?colour <hexcode colour / RGB colour>`,
	},
	{
		name: "roll",
		aliases: [],
		category: "features",
		description: "Make Bento roll a random number between 1 and the value you set (max. 100)",
		usage: `?roll <number between 1-100>`,
	},
	{
		name: "rps",
		aliases: [],
		category: "features",
		description: "Play Rock, Paper, Scissors with Bento 🍱",
		usage: `?rps <rock, paper, scissors> to play the game\n?rps stats [user mention or id] to see stats.`,
	},
	{
		name: "streamable",
		aliases: [],
		category: "features",
		description:
			"Get a Streamable link of your desired video. There is a 250 MB / 10 minute / up to 720p 60 fps limit per video.",
		usage: `?streamable <valid video URL or attachment> [title for the video]`,
	},
	{
		name: "reminder",
		aliases: ["remind"],
		category: "user",
		description:
			"Create reminders and you will receive a message reminder from Bento at your desired time.\nYou can either use time and say remind me in a day, or use schedule to specify a specific time. Use list to see a list of your reminders.\nPossible timeframes: [year, years, y,], [month, months, M], [week, weeks, w], [day, days, d], [hour, hours, h], [minute, minutes, m], [second, seconds, s], [millisecond, milliseconds, ms]",
		usage:
			"?reminder time <amount of time> <timeframe> <reminder>\n?reminder schedule <DD-MM-YYYY> <HH:mm> <timezone offset> <reminder>\n?reminder list",
	},
];
