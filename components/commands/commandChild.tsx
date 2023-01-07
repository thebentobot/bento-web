import Link from "next/link"
import React from "react"
import { capitalize } from "../../util/capitalize"
import AutoRole from "../discordMessages/admin/autoRole"
import Bye1 from "../discordMessages/admin/bye1"
import Bye2 from "../discordMessages/admin/bye2"
import Bye3 from "../discordMessages/admin/bye3"
import MemberLog1 from "../discordMessages/admin/memberlog1"
import MemberLog2 from "../discordMessages/admin/memberlog2"
import MessageLog from "../discordMessages/admin/messagelog"
import ModLog from "../discordMessages/admin/modlog"
import Prefix from "../discordMessages/admin/prefix"
import Settings from "../discordMessages/admin/settings"
import Welcome1 from "../discordMessages/admin/welcome1"
import Welcome2 from "../discordMessages/admin/welcome2"
import CaseCheck from "../discordMessages/case/caseCheck"
import CaseDelete from "../discordMessages/case/caseDelete"
import CaseEdit from "../discordMessages/case/caseEdit"
import CaseList from "../discordMessages/case/caseList"
import CaseSearch from "../discordMessages/case/caseSearch"
import CaseUser from "../discordMessages/case/caseUser"
import Gfycat from "../discordMessages/features/gfycat"
import Gif from "../discordMessages/features/gif"
import Horoscope from "../discordMessages/features/horoscope"
import Lastfm from "../discordMessages/features/lastfm"
import Tag from "../discordMessages/features/tag"
import Time from "../discordMessages/features/time"
import Urban from "../discordMessages/features/urban"
import Weather from "../discordMessages/features/weather"
import Help from "../discordMessages/info/help"
import Ban from "../discordMessages/moderation/ban"
import Mute from "../discordMessages/moderation/mute"
import Prune from "../discordMessages/moderation/prune"
import RoleAdd from "../discordMessages/role/roleAdd"
import RoleChannel from "../discordMessages/role/roleChannel"
import Bento from "../discordMessages/user/bento"
import LeaderboardMessage from "../discordMessages/user/leaderboard"
import Notification from "../discordMessages/user/notification"
import Rank from "../discordMessages/user/rank"
import Reminder from "../discordMessages/user/reminder"
import Sketch from "../discordMessages/user/sketch"
import Sketch2 from "../discordMessages/user/sketch2"
import Sketch3 from "../discordMessages/user/sketch3"
import Sketch4 from "../discordMessages/user/sketch4"

interface commandsInterface {
    key: number,
    name: string,
    aliases: string[],
    category: string,
    description: string,
    usage: string
}

export default function CommandChild ({ name, aliases, category, description, usage}: commandsInterface) {
    return (
        <li className='transition duration-300 ease-in-out bg-gray-800 items-center w-full my-4 px-0 lg:px-6 py-0 lg:py-6 p-4 rounded-lg group hover:bg-gray-700 shadow overflow-auto'>
        <h1 id={name} className='text-2xl font-extrabold text-yellow-400 sm:text-xl text-center'>
            <Link
              href={`#${name}`}
              className="text-yellow-400 hover:underline"
              >
              {capitalize(name)}
            </Link>
        </h1>
        <p className='text-xl whitespace-pre-line text-gray-300 sm:text-xl text-center max-w-xl mx-auto'>
            {aliases.length ? `Aliases: ${aliases.map(alias => alias).join(', ')}` : null}
        </p>
        <p className=' leading-10 text-xl mt-1 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            {description}
        </p>
        <br></br>
        <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
            How to use {' '}
            <a
              className="text-yellow-400 text-opacity-50 sm:text-xl group-hover:text-opacity-100"
              >
            {capitalize(name)}
            </a>
        </h1>
        <p className='text-xl whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            <code>{usage}</code>
        </p>
        <br />
        {name !== 'settings' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Settings />
            </div>
        </div>
        }
        {name !== 'prefix' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Prefix />
            </div>
        </div>
        }
        {name !== 'autorole' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <AutoRole />
            </div>
        </div>
        }
        {name !== 'bye' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Writing the bye message
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Bye2 />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Assigning the bye channel
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Bye1 />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Example of a bye message
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Bye3 />
            </div>
        </div>
        }
        {name !== 'memberlog' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Setting the member log
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <MemberLog1 />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Example of messages the member log sends
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <MemberLog2 />
            </div>
        </div>
        }
        {name !== 'messagelog' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Example of messages the message log sends
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <MessageLog />
            </div>
        </div>
        }
        {name !== 'modlog' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Example of messages the mod log sends
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <ModLog />
            </div>
        </div>
        }
        {name !== 'role' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Adding roles to the role management system
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <RoleAdd />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            The role channel after assigned a role channel, and an example of when you assign a role
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <RoleChannel />
            </div>
        </div>
        }
        {name !== 'welcome' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example of receiving a welcome
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Arguments is identical with the <Link href='#bye' className='hover:underline text-yellow-400 text-opacity-50 group-hover:text-opacity-100'>
            Bye
            </Link> command arguments
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Welcome1 />
            </div>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Welcome2 />
            </div>
        </div>
        }
        {name !== 'horoscope' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            An example of when you have saved your horoscope and checks for today. You need to specify <code>tomorrow</code> or <code>yesterday</code> as an argument, but <code>today</code> can be omitted.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Horoscope />
            </div>
        </div>
        }
        {name !== 'lastfm' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples of all arguments
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Lastfm />
            </div>
        </div>
        }
        {name !== 'tag' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples of all arguments
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Tag />
            </div>
        </div>
        }
        {name !== 'urban' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Urban />
            </div>
        </div>
        }
        {name !== 'weather' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Weather />
            </div>
        </div>
        }
        {name !== 'help' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Help />
            </div>
        </div>
        }
        {name !== 'prune' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Prune />
            </div>
        </div>
        }
        {name !== 'time' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Time />
            </div>
        </div>
        }
        {name !== 'ban' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Ban />
            </div>
        </div>
        }
        {name !== 'case' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Get a list of all kinds of punishments for a user. <br /> If you add <code>global</code> as the last argument you get all cases for the user, if they are on multiple Bento 🍱 servers.
            </p>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            If a server has enabled privacy settings with the <Link href='#caseglobal' className='hover:underline text-yellow-400 text-opacity-50 group-hover:text-opacity-100'>
            Caseglobal
            </Link> command, both the server where the punishment happened and the reason why will be hidden.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <CaseUser />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Check individual cases by <strong>case number</strong>. <br /> Case numbers are listed when a punishment is handed out, and when checking cases for a user.
            <br /> You can only check individual cases from the server you are currently on.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <CaseCheck />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Edit individual cases by <strong>case number</strong>. <br /> You can only edit reason and notes.
            <br /> You can only edit mute status when you edit a mute.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <CaseEdit />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Delete individual cases by <strong>case number</strong>. <br /> You need to confirm once before the delete happens, where it shows a preview of the case before you decide.
            <br /> Once it is deleted, it can not be recovered.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <CaseDelete />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Search for cases. <br /> You search by choosing a type of punishment, one of the potential columns (reason, notes, id of who banned e.g.), and at last the query you search with.
            <br /> Results are ordered by how close it is to the query, and how recent the case is.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <CaseSearch />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Get a list of punishment cases from your server. <br /> You get all cases if you do not specify two dates.
            <br /> Ordered by the recent cases in the time period that are specified.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <CaseList />
            </div>
        </div>
        }
        {name !== 'mute' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            You can both mute for an indefinite time by using the mute command just like how you would use <Link href='#ban' className='hover:underline text-yellow-400 text-opacity-50 group-hover:text-opacity-100'>
            Ban
            </Link>, <Link href='#kick' className='hover:underline text-yellow-400 text-opacity-50 group-hover:text-opacity-100'>
            Kick
            </Link> and <Link href='#warning' className='hover:underline text-yellow-400 text-opacity-50 group-hover:text-opacity-100'>
            Warning
            </Link>.
            <br /> But you can also specify a time where the user needs to be unmuted automatically, by writing a number and use the wished timeframe above.
            <br /> Mute someone for 30 minutes or 2 years?
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Mute />
            </div>
        </div>
        }
        {name !== 'leaderboard' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <LeaderboardMessage />
            </div>
        </div>
        }
        {name !== 'bento' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Example
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Bento />
            </div>
        </div>
        }
        {name !== 'notification' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
                Note - Bento 🍱 deletes your message every time you use a notifications command, so privacy of your notifications are secured.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Notification />
            </div>
        </div>
        }
        {name !== 'reminder' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Reminder />
            </div>
        </div>
        }
        {name !== 'rank' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Rank />
            </div>
        </div>
        }
        {name !== 'gif' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Gif />
            </div>
        </div>
        }
        {name !== 'gfycat' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Gfycat />
            </div>
        </div>
        }
        {name !== 'sketch' ? null : 
        <div>
            <h1 id={name} className='text-lg font-extrabold text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center'>
                Examples
            </h1>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
                How to use some of the various arguments. <br /> A lot of the different layers has the same syntax (e.g. opacity and colour).
                <br /> Remember that colours needs to be hex colours.
                <br /> Opacity values are from 0 to 100.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Sketch2 />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
                For the sidebar you need to specify the row that you want to change colour of. <br /> <code>?sketch sidebar opacity 50</code> and <code>?sketch sidebar colour #34D399</code> changes the background of the sidebar, not the text. You need to specify what text to change the colour of. <br />
                <br /> <code>?sketch sidebar rank</code> is for changing the colour of the rank text. The next argument <code>?sketch sidebar rank server</code> is where you add the row you want to change afterwards. The possible rank rows are either <code>server</code>, <code>global</code> or <code>bento</code>. <br /> Same syntax for changing the users text, where it is <code>?sketch sidebar users</code> and the possible rows <code>server</code>, <code>global</code>, <code>bento</code> or <code>timezone</code>.

            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Sketch3 />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
                For editing the xpboard, you can either choose to edit one specific element or two at the same time. <br /> When using <code>?sketch xpboard text</code> it edits for both level texts, whereas <code>?sketch xpboard text1</code> only edits the level text to the left. <br /> When editing the colours of the XP progress bars, you need to specify the colour or opacity for all three colours. <br /> Check the examples below. 
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Sketch4 />
            </div>
            <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
                A practical example, which shows the rank profile initially and after sketch customisation commands.
            </p>
            <div className='mt-2 opacity-50 group-hover:opacity-100'>
                <Sketch />
            </div>
        </div>
        }
        </li>
    )
}