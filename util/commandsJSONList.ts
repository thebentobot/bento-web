interface commandsInterface {
    name: string,
    aliases: string[],
    category: string,
    description: string,
    usage: string
}

interface commandsCategoryInterface {
   category: string,
   description: string
}

export const commandsCategoryList: commandsCategoryInterface[] = [
   {
      "category": "Admin",
      "description": "Server settings where you can e.g. enable role management, welcome messages and disable TikTok's. These commands requires certain role permissions, which are specified for each command."
   },
   {
      "category": "Features",
      "description": "Fun, entertaining and practical commands."
   },
   {
      "category": "Info",
      "description": "Info about users, list of emotes and roles, list of commands and help for each command."
   },
   {
      "category": "Moderation",
      "description": "Moderation commands. These commands requires certain role permissions, which are specified for each command."
   },
   {
      "category": "User",
      "description": "Users focused commands such as the Bento 🍱 command, leaderboard, set reminders and notification, or check rank."
   },
]

export const commandsList: commandsInterface[] = [
    {
       "name":"autorole",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Set a role that users gets assigned automatically when they join. You can add multiple roles.",
       "usage":"?autorole status\n?autorole set <roleID or role mention>\n?autorole delete <roleID>\n?autorole list"
    },
    {
       "name":"bye",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Bye message settings, for when a member leaves.\nDisabled by default and only works by assigning <channel> and <content>.\n{user} or {usertag} - mention user\n{username} - mention username\n{discriminator} - mention the #0000 for the user\n{server} - mention server\n{memberCount} - the member count\n{space} - adds a new line\nUse reverse / (slash) in front of a channel e.g. for linking to a rules channel.",
       "usage":"?bye status\n?bye channel <channelID>\n?bye message <content>\n?bye delete"
    },
    {
       "name":"caseglobal",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Enable or disable server name and reasons for global cases.\nIf you disable them, the moderation cases's server info and reasons from this server will be classified, and if enabled, other server can see the server name and reasons for cases from this server.",
       "usage":"?caseglobal server <enable/disable/status>\n?caseglobal reasons <enable/disable/status>"
    },
    {
      "name":"leaderboardSettings",
      "aliases":[
         "lbs"
      ],
      "category":"admin",
      "description":"Enable or disable the XP and levelling system on this server.",
      "usage":"?leaderboardSettings <enable/disable/status>"
   },
    {
       "name":"leaderboard",
       "aliases":[
          "ranking",
          "rankings",
          "lb"
       ],
       "category":"user",
       "description":"Shows the XP/level leaderboard for a server, globally for the bot, or global/local Bentos 🍱",
       "usage":"?leaderboard [<global/bento>] [global]"
    },
    {
       "name":"media",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Enable or disable the gif command on this server.",
       "usage":"?media <enable/disable/status>"
    },
    {
       "name":"memberlog",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Get a member log in a specified channel, for logging changes, updates, and matters about the users of the server",
       "usage":"?memberlog <status>\n?memberlog <channel> <channelID>\n?memberlog <delete>"
    },
    {
       "name":"messagelog",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Get a message log in a specified channel, for edited and deleted messages",
       "usage":"?messagelog <status>\n?messagelog <channel> <channelID>\n?messagelog <delete>"
    },
    {
       "name":"modlog",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Get a mod log in a specified channel, to log changes and moderation on the server",
       "usage":"?modlog <status>\n?modlog <channel> <channelID>\n?modlog <delete>"
    },
    {
       "name":"muterole",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Set an mute role that users get assigned when a mod mutes them",
       "usage":"?muterole <status>\n?muterole set <roleID or role mention>\n?muterole delete <roleID>"
    },
    {
       "name":"prefix",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Sets the prefix for this server.",
       "usage":"?prefix <newPrefix>"
    },
    {
       "name":"role",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Command to setup and manage role management on your server. Assign a specific channel where your users can assign roles by themselves. You can write custom instructions, add and delete roles as you like.\nSetup by following the order of the usage commands below. You need to first add the instructions message by using the message argument, then add roles, and then set the channel for role assignment.",
       "usage":"?role message <content>\n?role add <main/sub/other> <roleCommand: roleName>[, roleCommand: roleName, ]\n?role remove <main/sub/other> <roleCommand>[, roleCommand, roleCommand]\n?role channel <mention role channel or its channelID>\n?role update\n?role list"
    },
    {
       "name":"settings",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Sends an overview of the server settings",
       "usage":"?settings"
    },
    {
       "name":"tiktok",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"Enable or disable TikTok embedding for all messages on this server.",
       "usage":"?tiktok <enable/disable/status>"
    },
    {
       "name":"welcome",
       "aliases":[
          
       ],
       "category":"admin",
       "description":"welcome message settings, for when a member joins.\nDisabled by default and only works by assigning <channel> and <content>.\n{user} or {usertag} - mention user\n{username} - mention username\n{discriminator} - mention the #0000 for the user\n{server} - mention server\n{memberCount} - the member count\n{space} - adds a new line\nUse reverse / (slash) in front of a channel e.g. for linking to a rules channel.",
       "usage":"?welcome <status>\n?welcome <channel> <channelID>\n?welcome <msg/message> <content>\n?welcome <delete>"
    },
    {
       "name":"gif",
       "aliases":[
          
       ],
       "category":"features",
       "description":"Searches for a random GIF based on the search input. The GIF comes from Tenor which has a g-rated content filter for non-NSFW channels. The filter is off in NSFW channels.",
       "usage":"?gif <search input>"
    },
    {
       "name":"horoscope",
       "aliases":[
          "horo",
          "astro",
          "zodiac",
          "hs"
       ],
       "category":"features",
       "description":"Provides a horoscope based on day and sign. If you search signs, it provides a list of signs and their date range",
       "usage":"?horoscope signs\n?horoscope <save> <sign>\n?horoscope <[today]/tomorrow/yesterday> [sign or a user mention/id]\n?horoscope list\n?horoscope search <query>"
    },
    {
       "name":"lastfm",
       "aliases":[
          "fm",
          "lf"
       ],
       "category":"features",
       "description":"last.fm feature. If you don't mention a user with an argument, it searches for your last.fm. If you only mention a user and no time period, it checks for overall.\nThe possible time period arguments: overall, 7day, 1month, 3month, 6month, 12month.",
       "usage":"?lastfm set <lastfm account name>\n?lastfm remove <lastfm account name>\n?lastfm [np] [user id or mention a user]\n?lastfm toptracks/tt [time period, or user where time period = overall] [user id or mention a user]\n?lastfm topalbums/tal [time period, or user where time period = overall] [user id or mention a user]\n?lastfm topartists/ta [time period, or user where time period = overall] [user id or mention a user]\n?lastfm recent [user id or mention a user]\n?lastfm profile [user id or mention a user]\n?lastfm wkt [artist - song]\n?lastfm wka [artist - album]\n?lastfm wk [artist]\n?lastfm gwkt [artist - song]\n?lastfm gwka [artist - album]\n?lastfm wk [artist]"
    },
    {
       "name":"tag",
       "aliases":[
          "t"
       ],
       "category":"features",
       "description":"Add, delete, search, edit tags, get info about a tag or a list of all tags on a server",
       "usage":"?tag <tag name>\n?tag add <tag name> <tag content>\n?tag delete <tag name>\n?tag edit <tag name> <tag content being edit>\n?tag info <tag name>\n?tag list\n?tag random [search query]\n?tag rename <tag name> <new tag name>\n?tag search <query>\n?tag author [mention a user or userID]\n?tag top"
    },
    {
       "name":"time",
       "aliases":[
          
       ],
       "category":"features",
       "description":"Displays the local time for a specifc city. \n If it shows a city from another country than the one you expected, try to add a country code (e.g. US, GB, DE) beside the city (remember a comma after city), as shown below \n if it does not show up either, it may not be included in the time API.",
       "usage":"?time <city>, [country code]"
    },
    {
       "name":"urban",
       "aliases":[
          
       ],
       "category":"features",
       "description":"Search for definitions on Urban dictionary",
       "usage":"?urban <search input>"
    },
    {
       "name":"weather",
       "aliases":[
          
       ],
       "category":"features",
       "description":"Displays info about the weather at the city saved for the user, or at the specified city.\nIf it shows a city from another country than the one you expected, try to add a country code (e.g. US, GB, DE) beside the city (remember a comma after city), as shown below\nIf it does not show up either, it may not be included in the OpenWeather API.",
       "usage":"?weather\n?weather [save] <city>, [country code]"
    },
    {
       "name":"avatar",
       "aliases":[
          "pfp"
       ],
       "category":"info",
       "description":"Shows user's avatars, or your own if you don't mention anyone. You can also check the server avatar and banner.",
       "usage":"?avatar [userID or mention a user]\n?avatar server\n?avatar banner"
    },
    {
       "name":"commands",
       "aliases":[
          
       ],
       "category":"info",
       "description":"Displays a full list of bot commands categorised",
       "usage":"?commands"
    },
    {
       "name":"emotes",
       "aliases":[
          "emote"
       ],
       "category":"info",
       "description":"Shows list of emotes from the server.",
       "usage":"?emotes\n?emotes animated\n?emotes static"
    },
    {
       "name":"github",
       "aliases":[
          
       ],
       "category":"info",
       "description":"Link to the Bento GitHub organisation",
       "usage":"?github"
    },
    {
       "name":"help",
       "aliases":[
          
       ],
       "category":"info",
       "description":"Displays bot help message or info for a command",
       "usage":"?help\n?help [command name]"
    },
    {
       "name":"ping",
       "aliases":[
          
       ],
       "category":"info",
       "description":"Shows the latency for Bento Bot, the Discord API and the bot's database in PostgreSQL",
       "usage":"?ping"
    },
    {
       "name":"roles",
       "aliases":[

       ],
       "category":"info",
       "description":"Shows list of roles on the server.",
       "usage":"?roles"
    },
    {
       "name":"serverinfo",
       "aliases":[
          
       ],
       "category":"info",
       "description":"Displays info about the current server.",
       "usage":"?serverinfo"
    },
    {
       "name":"whois",
       "aliases":[
          "profile",
          "user"
       ],
       "category":"info",
       "description":"Displays info about the mentioned user or the user who uses the command.",
       "usage":"?whois <@user/userID>"
    },
    {
       "name":"ban",
       "aliases":[
          
       ],
       "category":"moderation",
       "description":"Bans the mentioned user from your server.",
       "usage":"?ban <user id or mention user> [reason]"
    },
    {
       "name":"case",
       "aliases":[
          
       ],
       "category":"moderation",
       "description":"A Case-style logging system for bans, kicks, mutes and warnings. You can only check, search, list edit and delete individual cases from your own server, but you are able to check global cases for a user as long as they are on your server.",
       "usage":"?case user <userID or user mention> <ban/kick/mute/warning/overview> [global]\n?case check <ban/kick/mute/warning> <case number>\n?case edit <ban/kick/mute/warning> <case number> <reason/note/muteStatus> <content to edit>\n?case delete <ban/kick/mute/warning> <case number>\n?case search <ban/kick/mute/warning> <note/reason/muteStatus/userID/date/muteEnd/actor> <your search input>\n?case list <ban/kick/mute/warning> [start date: YYYY-MM-DD] [end date: YYYY-MM-DD]"
    },
    {
       "name":"kick",
       "aliases":[
          
       ],
       "category":"moderation",
       "description":"Kicks the mentioned user from your server.",
       "usage":"?kick <user id or mention user> [reason]"
    },
    {
       "name":"mute",
       "aliases":[
          
       ],
       "category":"moderation",
       "description":"Mutes a user until unmute or for a specific time.\nPossible timeframes: millisecond/milliseconds/ms, second/seconds/s, minute/minutes/m, hour/hours/h, day/days/d, month/months/M, year/years/y.",
       "usage":"?mute <user id or mention user> [reason]\n?mute time <amount of time> <timeframe> <user id or mention user> [reason]"
    },
    {
       "name":"prune",
       "aliases":[
          
       ],
       "category":"moderation",
       "description":"Removes messages. If you don't mention a channel, it deletes in the channel you're in. If you don't mention a user, it deletes x number of messages in the current channel.",
       "usage":"?prune <1-100> [mention a user or a user id] [all channels or mention a channel or a channel id]"
    },
    {
       "name":"say",
       "aliases":[
          
       ],
       "category":"moderation",
       "description":"Bento repeats your message. If embed is added as an argument, Bento shows the message as en embed",
       "usage":"?say [embed] <input>"
    },
    {
       "name":"unban",
       "aliases":[
          
       ],
       "category":"moderation",
       "description":"Unbans the mentioned user from your server. The reason argument does not overwrite the reason for the ban but rather shows in the mod log as a reason for unban, if it was a manual unban.",
       "usage":"?unban <user id or mention user> [reason]"
    },
    {
       "name":"unmute",
       "aliases":[
          
       ],
       "category":"moderation",
       "description":"Unmutes a user. The reason argument does not overwrite the reason for the mute but rather shows in the mod log as a reason for unmute, if it was a manual unmute.",
       "usage":"?unmute <user id or mention user> [reason]"
    },
    {
       "name":"warning",
       "aliases":[
          "warn"
       ],
       "category":"moderation",
       "description":"Warns the mentioned user.",
       "usage":"?warning <user id or mention user> [reason]"
    },
    {
       "name":"bento",
       "aliases":[
          "bentobox",
          "🍱"
       ],
       "category":"user",
       "description":"Give a Bento Box 🍱 to your friend every 12th hour :D.",
       "usage":"?bento [<user>]"
    },
    {
      "name":"web",
      "aliases":[
      ],
      "category":"info",
      "description":"Link to the Bento 🍱 website",
      "usage":"?web"
   },
    {
       "name":"notification",
       "aliases":[
          "noti",
          "notify"
       ],
       "category":"user",
       "description":"Get a notification when someone mentions a specific word or sentence. You can enable it for the server you write the command from, or enable it globally to get it from all servers who has Bento. When adding a notification, add ''--global'' if you want to get notified when someone mentions the word on all Bento servers.",
       "usage":"?notification add <content>\n?notification delete <content>\n?notification list\n?notification global <content>"
    },
    {
       "name":"rank",
       "aliases":[
          "lvl",
          "level",
          "xp"
       ],
       "category":"user",
       "description":"Shows your rank, level, xp and Bento 🍱",
       "usage":"?rank [userID/mention a user]"
    },
    {
       "name":"reminder",
       "aliases":[
          "remind"
       ],
       "category":"user",
       "description":"Create reminders and you will receive a message reminder from Bento at your desired time.\nYou can either use time and say remind me in a day, or use schedule to specify a specific time. Use list to see a list of your reminders.\nPossible timeframes: [year, years, y,], [month, months, M], [week, weeks, w], [day, days, d], [hour, hours, h], [minute, minutes, m], [second, seconds, s], [millisecond, milliseconds, ms]",
       "usage":"?reminder time <amount of time> <timeframe> <reminder>\n?reminder schedule <DD-MM-YYYY> <HH:mm> <timezone offset> <reminder>\n?reminder list"
    }
 ]
