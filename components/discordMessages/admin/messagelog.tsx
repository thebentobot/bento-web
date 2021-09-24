import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment';

export default function MessageLog() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
            <DiscordEmbed slot='embeds' color="#FFF000" authorName='alonzo#0011 (userID: 370695349167325196)' authorImage='https://cdn.discordapp.com/avatars/370695349167325196/e3c560e32d17a3564cbac5e6164beb14.png?size=1024' timestamp={moment().toDate()}>
            <a target="_blank" rel="noopener noreferrer" href="https://discord.com/channels/714496317522444352/714836721979621448/873246980267180032">Message</a> edited in <DiscordMention type='channel'>bot-channel</DiscordMention>
                <br />
                <strong>Before: </strong>
                Banner I never said hi back
                <br />
                <strong>After: </strong>
                Banner u never said hi back
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Channel ID' inline inlineIndex={1}>714836721979621448</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Message ID' inline inlineIndex={1}>873246980267180032</DiscordEmbedField>
                    </DiscordEmbedFields>
                <span slot="footer">Edited at </span>
            </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            <DiscordEmbed slot='embeds' color="#FF2D00" authorName='Banner (userID: 232584569289703424)' authorImage='https://cdn.discordapp.com/avatars/232584569289703424/cc5e8923f457d9e00fc9605afe3da368.png?size=1024' timestamp={moment().toDate()}>
            Message deleted in <DiscordMention type='channel'>bot-channel</DiscordMention>
                <br />
                <strong>Deleted message: </strong>
                ?commands
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Channel ID' inline inlineIndex={1}>714827748555620364</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Message ID' inline inlineIndex={1}>874286860342534175</DiscordEmbedField>
                    </DiscordEmbedFields>
                <span slot="footer">Deleted at </span>
            </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}