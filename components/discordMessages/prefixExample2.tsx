import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment'

export default function PrefixExample2() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner' highlight><DiscordMention>Bento</DiscordMention></DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            The Bento 🍱 prefix on this server is: <code>?</code>.
            </DiscordMessage>
        </DiscordMessages>
    )
}