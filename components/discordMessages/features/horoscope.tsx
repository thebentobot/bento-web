import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment'

export default function Horoscope() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner' timestamp='08/15/2021'>?horo</DiscordMessage>
            <DiscordMessage profile='bentoBot' timestamp='08/15/2021'>
                <DiscordEmbed slot='embeds' color="#C0C0C0" authorName='Banner' authorImage='https://cdn.discordapp.com/avatars/232584569289703424/cc5e8923f457d9e00fc9605afe3da368.png?size=1024' embedTitle='Sagittarius horoscope for August 15, 2021'>
                You think it is in the bag. They have something to add. At least you are not bored.
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Date Range' inline inlineIndex={1}>Between Nov 23 - Dec 21</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Compatibility 😳' inline inlineIndex={2}>Virgo 😏</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Mood' inline inlineIndex={3}>Mellow</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Colour' inline inlineIndex={1}>Silver</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Lucky number' inline inlineIndex={2}>87</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Lucky time' inline inlineIndex={3}>1pm</DiscordEmbedField>
                    </DiscordEmbedFields>
                </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage profile='banner' timestamp='08/15/2021'>?horo <DiscordMention type='user'>Adam</DiscordMention></DiscordMessage>
            <DiscordMessage profile='bentoBot' timestamp='08/15/2021'>
                <DiscordEmbed slot='embeds' color="#800080" authorName='Adam' authorImage='https://cdn.discordapp.com/avatars/223908083825377281/7073d12699c13267cc0559b6ed5dd162.png?size=1024' embedTitle='Virgo horoscope for August 15, 2021'>
                There is a way out. Light streams through. Gloom and doom are history.
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Date Range' inline inlineIndex={1}>Between Aug 23 - Sep 22</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Compatibility 😳' inline inlineIndex={2}>Aries 😏</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Mood' inline inlineIndex={3}>Hopeful</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Colour' inline inlineIndex={1}>Purple</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Lucky number' inline inlineIndex={2}>55</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Lucky time' inline inlineIndex={3}>7am</DiscordEmbedField>
                    </DiscordEmbedFields>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}