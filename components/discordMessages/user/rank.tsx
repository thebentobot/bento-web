import { DiscordMention, DiscordMessage, DiscordMessages, DiscordAttachments, DiscordAttachment } from '@skyra/discord-components-react';

export default function Rank() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>
                ?rank
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890611687214940240/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?rank <DiscordMention type='user'>Fiji Spring Water</DiscordMention>
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://media.discordapp.net/attachments/790353119795871747/890616635080200233/Fiji_Spring_Water_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?rank 182194567498432513
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890616653233152050/Homeboywill_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
        </DiscordMessages>
    )
}