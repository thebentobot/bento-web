import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Bye2() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>
                ?bye message Goodbye {`{user}`}!
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            Your bye message is now: <code>Goodbye {`{user}`}!</code>
            <br></br>
            Remember to assign a channel where your bye message will appear
            </DiscordMessage>
        </DiscordMessages>
    )
}