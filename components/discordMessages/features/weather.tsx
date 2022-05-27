import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedFooter, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'
import moment from 'moment'
import { bannerAvatar } from '../../../pages/_app'

export default function Weather() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa' timestamp='08/15/2021'>?weather</DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b' timestamp='08/15/2021'>
                <DiscordEmbed slot='embeds' color="#EB6E4B" thumbnail='http://openweathermap.org/img/w/03n.png' authorName='Banner#1017' authorImage={bannerAvatar} embedTitle='Clouds ☁️ ️in Copenhagen, Denmark 🇩🇰'>
                    <strong>Currently</strong>
                    <br />
                    Scattered clouds ☁️
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Temperature' inline inlineIndex={1}>17°C (62°F)
Feels like 17°C (62°F)</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Minimum Temperature.' inline inlineIndex={2}>15°C (58°F)</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Maximum Temperature.' inline inlineIndex={3}>18°C (65°F)</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Cloudiness' inline inlineIndex={1}>40%
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Humidity' inline inlineIndex={2}>80%
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Last updated at
' inline inlineIndex={3}>9:32 PM
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Local time
' inline inlineIndex={1}>Aug 15, 2021 9:36 PM</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Sunrise' inline inlineIndex={2}>5:42 AM
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Sunset' inline inlineIndex={3}>8:46 PM
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Pressure' inline inlineIndex={1}>1008 hPa
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Wind Speed
' inline inlineIndex={2}>2.57 m/s
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Wind Direction
' inline inlineIndex={3}>↙️ (200°)
</DiscordEmbedField>
                    </DiscordEmbedFields>
                    <DiscordEmbedFooter
              slot="footer"
              footerImage="https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg"
            >
            </DiscordEmbedFooter>
                </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage author="Enter" avatar="/enter.png" roleColor='#03f611' timestamp='08/15/2021'>?weather seoul</DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b' timestamp='08/15/2021'>
                <DiscordEmbed slot='embeds' color="#EB6E4B" thumbnail='http://openweathermap.org/img/w/01n.png' authorName='OpenWeather' authorImage='https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg' embedTitle='Clear ☀️ in Seoul, Republic of Korea 🇰🇷'>
                    <strong>Currently</strong>
                    <br />
                    Clear sky ☀️
                    <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='Temperature' inline inlineIndex={1}>22°C (72°F)
Feels like 23°C (73°F)</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Minimum Temperature.' inline inlineIndex={2}>18°C (65°F)
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Maximum Temperature.' inline inlineIndex={3}>25°C (76°F)
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Cloudiness' inline inlineIndex={1}>0%
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Humidity' inline inlineIndex={2}>73%
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Last updated at
' inline inlineIndex={3}>5:33 AM

</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Local time
' inline inlineIndex={1}>Aug 16, 2021 5:32 AM
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Sunrise' inline inlineIndex={2}>5:48 AM

</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Sunset' inline inlineIndex={3}>7:24 PM

</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Pressure' inline inlineIndex={1}>1015 hPa
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Wind Speed
' inline inlineIndex={2}>2.57 m/s
</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Wind Direction
' inline inlineIndex={3}>↖️ (100°)
</DiscordEmbedField>
                    </DiscordEmbedFields>
                    <DiscordEmbedFooter
              slot="footer"
              footerImage="https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg"
            >
            </DiscordEmbedFooter>
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}