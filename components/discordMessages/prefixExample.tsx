import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment'

export default function PrefixExample() {
    return (
        <DiscordMessages>
            <DiscordMessage timestamp='08/15/2021' profile='adam' highlight><DiscordMention>Bento</DiscordMention> time tokyo</DiscordMessage>
            <DiscordMessage profile='bentoBot' timestamp='08/15/2021'>
            It is Aug 16, 2021 5:10 AM in Tokyo, Japan 🇯🇵
            </DiscordMessage>
        </DiscordMessages>
    )
}