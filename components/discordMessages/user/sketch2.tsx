import { DiscordMention, DiscordEmbed, DiscordMessage, DiscordMessages, DiscordAttachments, DiscordAttachment, DiscordEmbedDescription } from '@skyra/discord-components-react'

export default function Sketch2() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Lewis" avatar="/lewis.webp" roleColor='#00B2FF'>
                ?sketch bgcolour colour #DC2626
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user'>Lewis</DiscordMention> your background colour has been set.
            </DiscordMessage>
            <DiscordMessage author="Lewis" avatar="/lewis.webp" roleColor='#00B2FF'>
                ?sketch bgcolour status
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordEmbed slot='embeds' color="#ffd903" authorName='Lewis' authorImage='https://cdn.discordapp.com/avatars/166142440233893888/a985e46ae81da885ca44310f50d21014.png?size=1024'>
                <DiscordEmbedDescription slot='description'>
                Background URL - Not set. <br />
                Background Colour - #DC2626. <br />
                Background Opacity - Not set. <br />
                </DiscordEmbedDescription>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}