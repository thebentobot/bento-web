import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Welcome1() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?welcome message Welcome {`{user}`} to the **{`{server}`}** server! You are member number {`{memberCount}`}.{`{space}`}Please check the rules in {`\\<#714825604838719570>`}.
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            Your welcome message is now: <code>Welcome {`{user}`} to the **{`{server}`}** server! You are member number {`{memberCount}`}.{`{space}`}Please check the rules in {`\\<#714825604838719570>`}.</code>
            </DiscordMessage>
        </DiscordMessages>
    )
}