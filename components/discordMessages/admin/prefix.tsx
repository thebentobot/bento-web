import { DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Prefix() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Lewis" avatar="/lewis.webp" roleColor='#00B2FF'>
                ?prefix -
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                Your server prefix has been updated to <code>-</code>
            </DiscordMessage>
        </DiscordMessages>
    )
}