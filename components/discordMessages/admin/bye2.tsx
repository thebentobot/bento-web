import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Bye2() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.webp" roleColor='#ff00fa'>
                ?bye message Goodbye {`{user}`}!
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            Your bye message is now: <code>Goodbye {`{user}`}!</code>
            <br></br>
            Remember to assign a channel where your bye message will appear
            </DiscordMessage>
        </DiscordMessages>
    )
}