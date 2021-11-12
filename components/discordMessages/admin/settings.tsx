import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import moment from 'moment'

export default function Settings() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='fiji'>?settings</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' color="#f9d61b" authorName='Bento' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' authorUrl='/' embedTitle='Server settings for Bento Bot' footerImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' timestamp={moment().toDate()}>
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Tiktok' inline inlineIndex={1}>Enabled</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Media' inline inlineIndex={2}>Enabled</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Leaderboard' inline inlineIndex={3}>Enabled</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Server name enabled for global cases' inline inlineIndex={1}>Disabled</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Case reasons enabled for global cases' inline inlineIndex={2}>Disabled</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Welcome Messages' inline inlineIndex={3}>Disabled</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Bye Messages' inline inlineIndex={1}>Disabled</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Mod log channel' inline inlineIndex={2}>Not configured</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Message log channel' inline inlineIndex={3}>Not configured</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Mute role' inline inlineIndex={1}>Not configured</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Auto assigned role' inline inlineIndex={1}>Not configured</DiscordEmbedField>
                    </DiscordEmbedFields>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}