import { DiscordMention, DiscordEmbed, DiscordMessage, DiscordMessages, DiscordAttachments, DiscordAttachment } from '@skyra/discord-components-react';

export default function Sketch4() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='enter'>
                ?sketch xpboard text #FFFFFF
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user'>Enter</DiscordMention> both your xp board text colours has been set
            </DiscordMessage>
            <DiscordMessage profile='enter'>
                ?sketch xpboard bar1 #FCD34D #F59E0B #EF4444
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user'>Enter</DiscordMention> your xp bar (1/left) colour has been set.
            </DiscordMessage>
            <DiscordMessage profile='enter'>
                ?sketch xpboard barbg1 #111827
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user'>Enter</DiscordMention> your xp bar bg (1/left) colour has been set.
            </DiscordMessage>
        </DiscordMessages>
    )
}