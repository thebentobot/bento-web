import { DiscordEmbed, DiscordEmbedDescription, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedFooter, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import moment from 'moment'

export default function Help() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Lewis" avatar="/lewis.webp" roleColor='#00B2FF'>?help weather</DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordEmbed slot='embeds' color="#ffd903">
                <DiscordEmbedDescription slot='description'>
                    <strong>Command Name: </strong> weather
                    <br />
                    <strong>Aliases: </strong>
                    <br />
                    <strong>Description: </strong> Displays info about the weather at the city saved for the user, or at the specified city.
                    <br />
                    If it shows a city from another country than the one you expected, try to add a country code (e.g. US, GB, DE) beside the city (remember a comma after city), as shown below
                    <br />
                    If it does not show up either, it may not be included in the OpenWeather API.
                    <br />
                    <strong>Usage: </strong> ?weather [save] {`<city>`}, [country code]
                    <br />
                    <strong>Website: </strong> <a href='https://www.bentobot.xyz/commands#weather'>https://www.bentobot.xyz/commands#weather</a>
                    </DiscordEmbedDescription>
                    <DiscordEmbedFooter
              slot="footer"
            > {`<>`} = REQUIRED | [] = OPTIONAL</DiscordEmbedFooter>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}
//https://www.bentobot.xyz/commands#weather