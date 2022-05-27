import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import moment from 'moment'

export default function Urban() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Adam" avatar="/adam.webp" roleColor='#00B2FF'>?urban beer</DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b' timestamp={moment().toDate()}>
                <DiscordEmbed slot='embeds' color="#1c9fea" authorName='Urban Dictionary' authorImage='https://is4-ssl.mzstatic.com/image/thumb/Purple111/v4/81/c8/5a/81c85a6c-9f9d-c895-7361-0b19b3e5422e/mzl.gpzumtgx.png/246x0w.png' authorUrl='https://www.urbandictionary.com/' embedTitle='beer' url='http://beer.urbanup.com/718313'>
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Definition' inline inlineIndex={1}>[The cause] of and [solution] to all [life’s] problems!
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Example' inline inlineIndex={1}>-via [Homer J]. [Simpson]</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Rating' inline inlineIndex={1}>3795 👍 623 👎</DiscordEmbedField>
                    </DiscordEmbedFields>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}