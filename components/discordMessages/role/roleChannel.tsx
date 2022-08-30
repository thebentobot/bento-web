import { DiscordEmbed, DiscordEmbedFields, DiscordEmbedField, DiscordMention, DiscordMessage, DiscordMessages, DiscordEmbedDescription } from '@skyra/discord-components-react'
import moment from 'moment'

export default function RoleChannel() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b' timestamp={moment().toDate()}>
            <DiscordEmbedDescription slot='description'>
            <strong>Assign yourself a role!</strong>
            <br />
            <br />
            Assign Main roles, type <code>{`+main <role name(s) here>`}</code>.
            <br />
            Assign Sub roles, type <code>{`+sub <role name(s) here>`}</code>.
            <br />
            Assign Other roles, type <code>{`+other <role name(s) here>`}</code>.
            <br />
            To remove roles, use <code>-</code> instead of <code>+</code>.
            <br />
            <br />
            To assign or remove multiple roles of each category at once, write out the role names separated by commas.
            <br />
            <strong>Examples:</strong>
            <br />
            <code>+main tester, co-developer</code>
            <br />
            <code>-sub tester, co-developer</code>
            <br />
            <code>+other tester, beer</code>
            <br />
            <strong>Please only add or remove roles of one type in a single message.</strong>
            <br />
            <br />
            The <strong>News</strong> role is if you want updates about Bento regarding new features, technical issues, downtime, bugs etc.
            </DiscordEmbedDescription>
            <DiscordEmbed slot='embeds' title='Available Roles' color="#ffe9a4">
                <DiscordEmbedFields slot='fields'>
                    <DiscordEmbedField fieldTitle='Main Roles' inline inlineIndex={1}><code>Tester</code>, <code>Co-Developer</code></DiscordEmbedField>
                    <DiscordEmbedField fieldTitle='Sub Roles' inline inlineIndex={1}><code>News</code></DiscordEmbedField>
                    <DiscordEmbedField fieldTitle='Other Roles' inline inlineIndex={1}><code>Beer</code></DiscordEmbedField>
                </DiscordEmbedFields>
            </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage author="Fiji Spring Water" avatar="/fiji.webp" roleColor='#00B2FF'>
                +other bajer
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordEmbed slot='embeds' title='Fiji Spring Water#1949' color="#FFFFFF">
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Assigned Roles' inline inlineIndex={1}>Beer</DiscordEmbedField>
                    </DiscordEmbedFields>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}