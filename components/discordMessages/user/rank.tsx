import { DiscordMention, DiscordMessage, DiscordMessages, DiscordAttachments, DiscordAttachment } from '@skyra/discord-components-react'

export default function Rank() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?rank
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890611687214940240/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?rank <DiscordMention type='user'>Fiji Spring Water</DiscordMention>
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://media.discordapp.net/attachments/790353119795871747/890616635080200233/Fiji_Spring_Water_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?rank 182194567498432513
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890616653233152050/Homeboywill_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
        </DiscordMessages>
    )
}