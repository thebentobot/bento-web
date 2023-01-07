import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedFooter, DiscordMention, DiscordMessage, DiscordMessages, DiscordEmbedDescription, DiscordInlineCode } from '@skyra/discord-components-react'
import moment from 'moment'
import Link from 'next/link'
import { bannerAvatar } from '../../pages/_app'

export default function BentoGreeting() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b' timestamp={moment().toDate()}>
                <DiscordEmbed slot='embeds' color="#f9d61b" authorName='Bento' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' authorUrl='https://bento.com' embedTitle='Hello! My name is Bento 🍱'>
                    <DiscordEmbedDescription slot='description'>
                Thank you for choosing me to service your server!
                <br></br>
                My default prefix is <DiscordInlineCode>?</DiscordInlineCode>.
                <br></br>
                If the prefix is conflicting because of other bots, you can change it by writing <DiscordInlineCode>{`?prefix <NEW PREFIX>`}</DiscordInlineCode>
                <br></br>
                Use <DiscordInlineCode>?settings</DiscordInlineCode> to check what features I have enabled or disabled by default.
                <br></br>
                Use <DiscordInlineCode>?commands</DiscordInlineCode> to see a list of all my commands and <DiscordInlineCode>{`?help <command name>`}</DiscordInlineCode> to get help or info about a command.
                </DiscordEmbedDescription>
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Need help? Or do you have some ideas or feedback to Bento 🍱? Feel free to join the support server'><Link href='https://discord.gg/dd68WwP'>https://discord.gg/dd68WwP</Link></DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Want to check out the code for Bento 🍱?'><Link href='https://github.com/thebentobot/bento'>https://github.com/thebentobot/bento</Link></DiscordEmbedField>
                    </DiscordEmbedFields>
                    <DiscordEmbedFooter
              slot="footer"
              footerImage={bannerAvatar}
            >
              Bento 🍱 is created by Banner#1017
            </DiscordEmbedFooter>
                </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage author="Adam" avatar="/adam.webp" roleColor='#00B2FF' highlight>Hello <DiscordMention>Bento</DiscordMention>! 😁</DiscordMessage>
        </DiscordMessages>
    )
}