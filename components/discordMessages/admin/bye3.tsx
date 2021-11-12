import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Bye3() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
            Goodbye <DiscordMention type='user'>Boo</DiscordMention>!
            </DiscordMessage>
        </DiscordMessages>
    )
}