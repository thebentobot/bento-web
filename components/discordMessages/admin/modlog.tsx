import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment';

export default function ModLog() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
            <DiscordEmbed slot='embeds' color="#000000" embedTitle='Banner’s lab rat (alonzo#0011) was muted for 8 hours!' authorName='Banner#1017' authorImage='https://cdn.discordapp.com/avatars/232584569289703424/cc5e8923f457d9e00fc9605afe3da368.png?size=1024' timestamp={moment().toDate()} thumbnail='https://cdn.discordapp.com/avatars/370695349167325196/0b1b81f0a0180b881e1c24ac22e2e806.png?size=1024'>
            This user has been muted <strong>10 times</strong> on this server
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Reason' inline inlineIndex={1}>Annoying</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Username' inline inlineIndex={1}>alonzo#0011</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='User ID' inline inlineIndex={1}>370695349167325196</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Muted by' inline inlineIndex={1}>Banner#1017</DiscordEmbedField>
                    </DiscordEmbedFields>
                <span slot="footer">Mute Case Number: 17  </span>
            </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            A channel called <strong>report-bugs</strong> under the category <strong>#Bento Bot</strong> was created at <strong>Thu Aug 05 2021 23:39:30 GMT+0000 (Coordinated Universal Time).</strong>
            <br />
            Get more info in the audit log.
            </DiscordMessage>
        </DiscordMessages>
    )
}