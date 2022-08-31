import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Mute() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.webp" roleColor='#ff00fa'>?mute time 30 minutes <DiscordMention type='user'>Alonzo</DiscordMention> can’t read my message
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            <strong>Banner’s lab rat (alonzo#0011)</strong> was successfully <strong>muted</strong> on this server.
            <br />
            <strong>Case number: 16.</strong>
            <br />
            <strong>Reason: </strong> can’t read my message.
            <br />
            You can add notes for this mute by using the case command together with the case number.
            </DiscordMessage>
        </DiscordMessages>
    )
}