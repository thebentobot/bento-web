import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import moment from 'moment'
import { bannerAvatar } from '../../../pages/_app'

export default function Tag() {
    return (
        <DiscordMessages>
            <DiscordMessage timestamp='08/16/2021' author="Banner" avatar="/banner.webp" roleColor='#ff00fa'>
                ?tag add nav <a href='https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4'>https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4</a>
                <DiscordEmbed
							slot="embeds"
							video="https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4"
							image="https://cdn.discordapp.com/attachments/875028048016187412/876553778554359898/unknown.png"
						></DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage timestamp='08/16/2021' author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                The tag <code>nav</code> was successfully saved!
                <br />
                Content:
                <br />
                <a href='https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4'>https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4</a>
                <DiscordEmbed
							slot="embeds"
							video="https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4"
							image="https://cdn.discordapp.com/attachments/875028048016187412/876553778554359898/unknown.png"
						></DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage timestamp='08/16/2021' author="Fiji Spring Water" avatar="/fiji.webp" roleColor='#00B2FF'>
                ?nav
            </DiscordMessage>
            <DiscordMessage timestamp='08/16/2021' author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            <a href='https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4'>https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4</a>
                <DiscordEmbed
							slot="embeds"
							video="https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4"
							image="https://cdn.discordapp.com/attachments/875028048016187412/876553778554359898/unknown.png"
						></DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage timestamp='08/16/2021' author="Adam" avatar="/adam.webp" roleColor='#00B2FF'>
                ?tag info nav
            </DiscordMessage>
            <DiscordMessage timestamp='08/16/2021' author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            <DiscordEmbed slot='embeds' color="#ffd903" authorName='All the Cappermotes' thumbnail={bannerAvatar} authorImage='https://cdn.discordapp.com/icons/521080679606386698/882317d9d10df050ba1802546ce11775.png?size=1024' embedTitle='nav'>
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Author of the tag' inline inlineIndex={1}>Banner#1017</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Content' inline inlineIndex={1}><a href='https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4'>https://cdn.discordapp.com/attachments/565375372909084684/621159237623480340/Nav.mp4</a></DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Date made' inline inlineIndex={1}>Tuesday, August 16th 2021, 01:54:40 AM UTC</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Usage count' inline inlineIndex={1}>1 time</DiscordEmbedField>
                    </DiscordEmbedFields>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}