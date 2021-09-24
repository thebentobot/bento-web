import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions } from '@skyra/discord-components-react';
import moment from 'moment'

export default function CaseEdit() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>?case edit warning 1 note he may get the mute mask in the future muahaha</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            <DiscordEmbed slot='embeds' color="#ffd903" embedTitle="Warning Case Number 1's note was updated!" authorName='Bento Bot' footerImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' thumbnail='https://cdn.discordapp.com/avatars/370695349167325196/e3c560e32d17a3564cbac5e6164beb14.png?size=1024'>
                <strong>Original note</strong>
                <br />
                null
                <br />
                <strong>New note</strong>
                <br />
                he may get the mute mask in the future muahaha
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Case User' inline inlineIndex={1}>Alonzo#0011</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='UserID' inline inlineIndex={1}>370695349167325196</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Reason' inline inlineIndex={1}>behave young man 😏</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Date of occurence' inline inlineIndex={1}>Thursday, July 22nd 2021, 22:47:53 PM +00:00</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='User who warned' inline inlineIndex={1}>Banner#1017</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='UserID for the user who warned' inline inlineIndex={1}>232584569289703424</DiscordEmbedField>
                </DiscordEmbedFields>
                <span slot="footer">Warning Case Number: 1  </span>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}