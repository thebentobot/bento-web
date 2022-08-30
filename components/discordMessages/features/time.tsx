import { DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Time() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Lewis" avatar="/lewis.webp" roleColor='#00B2FF' timestamp='08/15/2021'>
                ?time tokyo
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b' timestamp='08/15/2021'>
            It is Aug 16, 2021 5:10 AM in Tokyo, Japan 🇯🇵
            </DiscordMessage>
        </DiscordMessages>
    )
}