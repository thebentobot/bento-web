import { DiscordMention, DiscordEmbed, DiscordMessage, DiscordMessages, DiscordAttachments, DiscordAttachment } from '@skyra/discord-components-react'

export default function Sketch2() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='lewis'>
                ?sketch bgcolour colour #DC2626
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user'>Lewis</DiscordMention> your background colour has been set.
            </DiscordMessage>
            <DiscordMessage profile='lewis'>
                ?sketch bgcolour status
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' color="#ffd903" authorName='Lewis' authorImage='https://cdn.discordapp.com/avatars/166142440233893888/a985e46ae81da885ca44310f50d21014.png?size=1024'>
                Background URL - Not set. <br />
                Background Colour - #DC2626. <br />
                Background Opacity - Not set. <br />
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}