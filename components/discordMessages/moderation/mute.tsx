import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Mute() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>?mute time 30 minutes <DiscordMention type='user'>Alonzo</DiscordMention> can’t read my message
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
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