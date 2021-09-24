import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions } from '@skyra/discord-components-react';
import moment from 'moment'

export default function CaseUser() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>?case user 370695349167325196 mute</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                Amount of mutes 1/10
                <DiscordEmbed slot='embeds' color="#ffd903" embedTitle='Banner’s Lab Rat (alonzo#0011)' authorName='Bento Bot' footerImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' thumbnail='https://cdn.discordapp.com/avatars/370695349167325196/e3c560e32d17a3564cbac5e6164beb14.png?size=1024'>
                <strong>Reason for Mute</strong>
                <br />
                stop with the kim lip smh
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Date of occurence' inline inlineIndex={1}>Saturday, July 24th 2021, 19:52:07 PM +00:00</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Date of unmute' inline inlineIndex={1}>Saturday, July 24th 2021, 20:52:07 PM +00:00</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Mute activity' inline inlineIndex={1}>Unmuted</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='User who gave the mute' inline inlineIndex={1}>Banner#1017</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Notes about this case' inline inlineIndex={1}>No notes made for this case</DiscordEmbedField>
                </DiscordEmbedFields>
                <span slot="footer">Mute Case Number: 6  </span>
                </DiscordEmbed>
                <DiscordReactions slot="reactions">
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/left-arrow_2b05-fe0f.png"></DiscordReaction>
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/right-arrow_27a1-fe0f.png"></DiscordReaction>
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/cross-mark_274c.png"></DiscordReaction>
                    </DiscordReactions>
            </DiscordMessage>
            <DiscordMessage profile='banner'>?case user 370695349167325196 overview</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                Amount of mutes 1/10
                <DiscordEmbed slot='embeds' color="#ffd903" embedTitle='Overview for Banner’s lab rat (alonzo#0011)' authorName='Bento Bot' footerImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' thumbnail='https://cdn.discordapp.com/avatars/370695349167325196/e3c560e32d17a3564cbac5e6164beb14.png?size=1024'>
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Bans' inline inlineIndex={1}>This user has received 0 bans</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Kicks' inline inlineIndex={1}>This user has received 10 mutes <br /> Last mute was on Friday, August 13th 2021, 00:57:31 AM +00:00 </DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Mutes' inline inlineIndex={1}>Unmuted</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Warnings' inline inlineIndex={1}>This user has received 4 warnings <br /> Last warning was on Thursday, August 12th 2021, 00:41:15 AM +00:00 </DiscordEmbedField>
                </DiscordEmbedFields>
                <span slot="footer">UserID: 370695349167325196  </span>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}