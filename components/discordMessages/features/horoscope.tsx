import { DiscordEmbed, DiscordEmbedDescription, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import moment from 'moment'
import { adamAvatar, bannerAvatar } from '../../../pages/_app'

export default function Horoscope() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.webp" roleColor='#ff00fa' timestamp='08/15/2021'>?horo</DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b' timestamp='08/15/2021'>
                <DiscordEmbed slot='embeds' color="#C0C0C0" authorName='Banner' authorImage={bannerAvatar} embedTitle='Sagittarius horoscope for August 15, 2021'>
                <DiscordEmbedDescription slot='description'>
                You think it is in the bag. They have something to add. At least you are not bored.
                </DiscordEmbedDescription>
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
            <DiscordMessage author="Banner" avatar="/banner.webp" roleColor='#ff00fa' timestamp='08/15/2021'>?horo <DiscordMention type='user'>Adam</DiscordMention></DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b' timestamp='08/15/2021'>
                <DiscordEmbed slot='embeds' color="#800080" authorName='Adam' authorImage={adamAvatar} embedTitle='Virgo horoscope for August 15, 2021'>
                <DiscordEmbedDescription slot='description'>
                There is a way out. Light streams through. Gloom and doom are history.
                </DiscordEmbedDescription>
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