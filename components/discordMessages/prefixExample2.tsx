import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordInlineCode, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import moment from 'moment'

export default function PrefixExample2() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa' highlight><DiscordMention>Bento</DiscordMention></DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            The Bento 🍱 prefix on this server is: <DiscordInlineCode>?</DiscordInlineCode>.
            </DiscordMessage>
        </DiscordMessages>
    )
}