import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment'

export default function Reminder() {
    return (
        <div>
        <DiscordMessages>
            <DiscordMessage timestamp='08/16/2021' profile='enter'>
            ?remind time 4 hours add stayc to comeback list. September 6.
            </DiscordMessage>
        </DiscordMessages>
        <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Where you receive this DM from Bento 🍱, if they’re enabled.
        </p>
        <DiscordMessages>
            <DiscordMessage timestamp='08/16/2021' profile='bentoBot'>
            Your reminder has been set!
            <br />
            In 30 minutes you will be reminded to <code>add stayc to comeback list. September 6.</code>.
            <br />
            Date for reminder: approx. Monday, August 16th 2021, 04:40:47 AM +00:00
        </DiscordMessage>
        </DiscordMessages>
        <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            It is also possible to save for exact dates with the <code>schedule</code> argument instead of time, and also possible to get a DM with a list of all reminders by using <code>?reminder list</code>.
        </p>
        <DiscordMessages>
            <DiscordMessage timestamp='08/16/2021' profile='alonzo'>
            ?remind schedule 06-09-2021 10:00 +02:00 STAYC COMEBACK
            </DiscordMessage>
        </DiscordMessages>
        <br />
        <DiscordMessages>
            <DiscordMessage timestamp='08/16/2021' profile='bentoBot'>
                <DiscordEmbed slot='embeds' thumbnail='https://cdn.discordapp.com/avatars/370695349167325196/e3c560e32d17a3564cbac5e6164beb14.png?size=1024' color="#ffd903" embedTitle='In 21 days' authorName='Reminder' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024'>
                STAYC COMEBACK
                <span slot="footer">Remind Date: Monday, September 6th 2021, 08:00:00 AM +00:00  </span>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
        </div>
    )
}