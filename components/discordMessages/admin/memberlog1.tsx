import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function MemberLog1() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>
                ?memberlog channel <DiscordMention type='channel'>memberlog</DiscordMention>
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            Your member log channel was assigned! It is in <DiscordMention type='channel'>memberlog</DiscordMention>
            </DiscordMessage>
        </DiscordMessages>
    )
}