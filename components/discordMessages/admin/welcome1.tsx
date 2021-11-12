import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Welcome1() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>
                ?welcome message Welcome {`{user}`} to the **{`{server}`}** server! You are member number {`{memberCount}`}.{`{space}`}Please check the rules in {`\\<#714825604838719570>`}.
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            Your welcome message is now: <code>Welcome {`{user}`} to the **{`{server}`}** server! You are member number {`{memberCount}`}.{`{space}`}Please check the rules in {`\\<#714825604838719570>`}.</code>
            </DiscordMessage>
        </DiscordMessages>
    )
}