import { DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Time() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='lewis' timestamp='08/15/2021'>
                ?time tokyo
            </DiscordMessage>
            <DiscordMessage profile='bentoBot' timestamp='08/15/2021'>
            It is Aug 16, 2021 5:10 AM in Tokyo, Japan 🇯🇵
            </DiscordMessage>
        </DiscordMessages>
    )
}