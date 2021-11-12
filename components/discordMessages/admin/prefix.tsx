import { DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Prefix() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='lewis'>
                ?prefix -
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                Your server prefix has been updated to <code>-</code>
            </DiscordMessage>
        </DiscordMessages>
    )
}