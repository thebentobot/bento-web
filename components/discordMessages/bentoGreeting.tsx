import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedFooter, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import moment from 'moment'
import { bannerAvatar } from '../../pages/_app'

export default function BentoGreeting() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b' timestamp={moment().toDate()}>
                <DiscordEmbed slot='embeds' color="#f9d61b" authorName='Bento' authorImage='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024' authorUrl='https://bento.com' embedTitle='Hello! My name is Bento 🍱'>
                Thank you for choosing me to service your server!
                <br></br>
                My default prefix is <code>?</code>.
                <br></br>
                If the prefix is conflicting because of other bots, you can change it by writing <code>{`?prefix <NEW PREFIX>`}</code>
                <br></br>
                Use <code>?settings</code> to check what features I have enabled or disabled by default.
                <br></br>
                Use <code>?commands</code> to see a list of all my commands and <code>{`?help <command name>`}</code> to get help or info about a command.
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Need help? Or do you have some ideas or feedback to Bento 🍱? Feel free to join the support server'><a href='https://discord.gg/dd68WwP'>https://discord.gg/dd68WwP</a></DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Want to check out the code for Bento 🍱?'><a href='https://github.com/thebentobot/bentoTS'>https://github.com/thebentobot/bentoTS</a></DiscordEmbedField>
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