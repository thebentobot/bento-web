import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Welcome2() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
            Welcome <DiscordMention type='user'>tzuwy</DiscordMention> to the <strong>Bento Bot</strong> server!
            <br />
            You are member number 21.
            <br />
            Please check the rules in <DiscordMention type='channel'>welcome</DiscordMention>
            </DiscordMessage>
        </DiscordMessages>
    )
}