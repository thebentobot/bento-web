import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Bye1() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>
                ?bye channel 714496317983948975
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            Bye messages will now appear in <DiscordMention type='channel'>general</DiscordMention>
            </DiscordMessage>
        </DiscordMessages>
    )
}