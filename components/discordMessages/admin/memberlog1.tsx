import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function MemberLog1() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?memberlog channel <DiscordMention type='channel'>memberlog</DiscordMention>
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            Your member log channel was assigned! It is in <DiscordMention type='channel'>memberlog</DiscordMention>
            </DiscordMessage>
        </DiscordMessages>
    )
}