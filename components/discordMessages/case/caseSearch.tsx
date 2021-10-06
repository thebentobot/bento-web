import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions } from '@skyra/discord-components-react';
import moment from 'moment'
import { alonzoAvatar } from '../../../pages/_app';

export default function CaseSearch() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>?case search mute reason annoy</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                Result 1/5
                <DiscordEmbed slot='embeds' color="#ffd903" embedTitle='Banner’s Lab Rat (alonzo#0011)' authorName='Bento Bot' footerImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' thumbnail={alonzoAvatar}>
                <strong>Reason for Mute</strong>
                <br />
                annoying
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Date of occurence' inline inlineIndex={1}>Saturday, August 7th 2021, 23:45:26 PM +00:00</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Date of unmute' inline inlineIndex={1}>Sunday, August 8th 2021, 07:45:26 AM +00:00</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Mute activity' inline inlineIndex={1}>Unmuted</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='User who gave the mute' inline inlineIndex={1}>Banner#1017</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Notes about this case' inline inlineIndex={1}>No notes made for this case</DiscordEmbedField>
                </DiscordEmbedFields>
                <span slot="footer">Mute Case Number: 13  </span>
                </DiscordEmbed>
                <DiscordReactions slot="reactions">
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/left-arrow_2b05-fe0f.png"></DiscordReaction>
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/right-arrow_27a1-fe0f.png"></DiscordReaction>
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/cross-mark_274c.png"></DiscordReaction>
                    </DiscordReactions>
            </DiscordMessage>
        </DiscordMessages>
    )
}