import { DiscordAttachment, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Bento() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Tzuwy" avatar="/tzuwy.webp" roleColor='#f0dacb'>
            ?bento
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            <strong>tzuwy</strong>, you can give someone a <strong>Bento Box 🍱</strong> again in 1 hours, 22 minutes and 16 seconds
            </DiscordMessage>
            <DiscordMessage author="alonzo" avatar="/alonzo.webp" roleColor='#99ff99'>
            ?bento
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            You didn’t specify a user to give the daily <strong>Bento 🍱</strong> to!
            </DiscordMessage>
            <DiscordMessage author="alonzo" avatar="/alonzo.webp" roleColor='#99ff99'>
            ?bento <DiscordMention type='user'>tzuwy</DiscordMention>
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            <strong>alonzo</strong> just gave a <strong>Bento 🍱</strong> to <strong>tzuwy</strong>!
            <br />
            <strong>tzuwy</strong> has received <strong>48 Bento 🍱</strong> over time 😋
            <br />
            <strong>alonzo</strong> can give a <strong>Bento 🍱</strong> again in 12 hours.
            </DiscordMessage>
            <DiscordMessage author="Tzuwy" avatar="/tzuwy.webp" roleColor='#f0dacb'>
                <DiscordAttachment slot='attachments' url='https://cdn.discordapp.com/emojis/864322844342222858.gif?v=1' height={48} width={48}></DiscordAttachment>
            </DiscordMessage>
            <DiscordMessage author="alonzo" avatar="/alonzo.webp" roleColor='#99ff99'>
                <DiscordAttachment slot='attachments' url='https://cdn.discordapp.com/emojis/864322844342222858.gif?v=1' height={48} width={48}></DiscordAttachment>
            </DiscordMessage>
        </DiscordMessages>
    )
}