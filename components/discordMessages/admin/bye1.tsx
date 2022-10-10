import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Bye1() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.webp" roleColor='#ff00fa'>
                ?bye channel 714496317983948975
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            Bye messages will now appear in <DiscordMention type='channel'>general</DiscordMention>
            </DiscordMessage>
        </DiscordMessages>
    )
}