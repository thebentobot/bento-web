import { DiscordMention, DiscordEmbed, DiscordMessage, DiscordMessages, DiscordAttachments, DiscordAttachment } from '@skyra/discord-components-react';

export default function Sketch3() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='fiji'>
                ?sketch sidebar colour #FFFFFF
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user'>Fiji Spring Water</DiscordMention> your sidebar colour has been set.
            </DiscordMessage>
            <DiscordMessage profile='fiji'>
                ?sketch sidebar rank server #FCD34D
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user'>Fiji Spring Water</DiscordMention> your sidebar server rank colour has been set.
            </DiscordMessage>
        </DiscordMessages>
    )
}