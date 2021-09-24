import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions } from '@skyra/discord-components-react';
import moment from 'moment'

export default function CaseCheck() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>?case check warning 3</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' color="#ffd903" embedTitle='Warning Case Number 3: Banner’s lab rat (alonzo#0011)' authorName='Banner#1017' footerImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' authorImage='https://cdn.discordapp.com/avatars/232584569289703424/cc5e8923f457d9e00fc9605afe3da368.png?size=1024' thumbnail='https://cdn.discordapp.com/avatars/370695349167325196/e3c560e32d17a3564cbac5e6164beb14.png?size=1024'>
                <strong>Reason for Warning</strong>
                <br />
                trying to fill me with bs
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='UserID' inline inlineIndex={1}>370695349167325196</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Date of occurence' inline inlineIndex={1}>Friday, July 30th 2021, 05:12:20 AM +00:00</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='User who gave the warning' inline inlineIndex={1}>Banner#1017</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='UserID for the User who gave the warning' inline inlineIndex={1}>232584569289703424</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Notes about this case' inline inlineIndex={1}>he is annoying he will get the boot at some point definitely</DiscordEmbedField>
                </DiscordEmbedFields>
                <span slot="footer">Warning Case Number: 3  </span>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}