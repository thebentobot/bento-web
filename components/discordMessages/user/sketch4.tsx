import { DiscordMention, DiscordEmbed, DiscordMessage, DiscordMessages, DiscordAttachments, DiscordAttachment } from '@skyra/discord-components-react'

export default function Sketch4() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Enter" avatar="/enter.png" roleColor='#03f611'>
                ?sketch xpboard text #FFFFFF
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user'>Enter</DiscordMention> both your xp board text colours has been set
            </DiscordMessage>
            <DiscordMessage author="Enter" avatar="/enter.png" roleColor='#03f611'>
                ?sketch xpboard bar1 #FCD34D #F59E0B #EF4444
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user'>Enter</DiscordMention> your xp bar (1/left) colour has been set.
            </DiscordMessage>
            <DiscordMessage author="Enter" avatar="/enter.png" roleColor='#03f611'>
                ?sketch xpboard barbg1 #111827
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user'>Enter</DiscordMention> your xp bar bg (1/left) colour has been set.
            </DiscordMessage>
        </DiscordMessages>
    )
}