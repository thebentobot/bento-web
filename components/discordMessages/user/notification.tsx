import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import moment from 'moment'
import { adamAvatar, tzuwyAvatar } from '../../../pages/_app'

export default function Notification() {
    return (
        <div>
        <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            You get notified by enabling your DM’s for Bento 🍱
            <br />
            You start off by saving a <code>keyword</code>, where when people mention the word, you will receive a DM.
        </p>
        <DiscordMessages>
            <DiscordMessage profile='adam'>?notification add pizza</DiscordMessage>
        </DiscordMessages>
        <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            Where you receive this DM after saving it.
        </p>
        <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' color="#ffd903">
                Your notification <code>pizza</code> has been saved!
                <br />
                You will be notified when your notification content are mentioned on the server you saved it on. Use the global argument for the notification command to enable global notifications.
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
        <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            When a user mentions this saved keyword, you will be notified like this:
        </p>
        <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
                Link to message:
                <br />
                <a href='https://discord.com/channels/714496317522444352/714825604838719570/872462217587601508'>https://discord.com/channels/714496317522444352/714825604838719570/872462217587601508</a>
                <DiscordEmbed slot='embeds' color="#ffd903" authorName='Bento Bot' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' thumbnail={tzuwyAvatar}>
                🗨️ tzuwy#0001 mentioned <code>pizza</code> in <DiscordMention type='channel'>general</DiscordMention> on <strong>Bento Bot</strong>.
                <br /> 
                Link to the message <a href='https://discord.com/channels/714496317522444352/714825604838719570/872462217587601508'>here</a>
                <br />
                <strong>[12:42:47 +00:00] Banner#1017</strong>
                <br />
                🍱
                <br />
                <strong>[12:42:48 +00:00] Enter#0001</strong>
                <br />
                Spaghetti
                <br />
                <strong>[12:42:49 +00:00] tzuwy#0001</strong>
                <br />
                <strong>pizza</strong> is tasty
                </DiscordEmbed>
            </DiscordMessage>        
        </DiscordMessages>
        <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            To delete a notification, you just write delete instead of add and then what keyword to delete.
            <br />
            You can also get a list of all your notifications
        </p>
        <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' embedTitle='Your saved notifications' color="#ffd903" thumbnail={adamAvatar}>
                    <strong>pizza</strong> (Bento Bot) | <strong>burger</strong> (G) | <strong>beer</strong> (G)
                    <span slot="footer">Notifications marked with (G) is enabled globally. <br /> Notifications in total: 3.   </span>
                </DiscordEmbed>
            </DiscordMessage>        
        </DiscordMessages>
        <p className='text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto'>
            At last, you can both save a keyword for global notifications by adding <strong>--global</strong> when saving your keyword,
            <br /> or use the global command below.
        </p>
        <DiscordMessages>
            <DiscordMessage profile='adam'>?noti global pizza</DiscordMessage>
            <DiscordMessage highlight profile='bentoBot'><DiscordMention>Adam</DiscordMention> Your notification was just <code>enabled</code> globally.</DiscordMessage>
            <DiscordMessage profile='adam'>?noti global pizza</DiscordMessage>
            <DiscordMessage highlight profile='bentoBot'><DiscordMention>Adam</DiscordMention> Your notification was just <code>disabled</code> globally.</DiscordMessage>
        </DiscordMessages>
        </div>
    )
}