import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment'

export default function Weather() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner' timestamp='08/15/2021'>?weather</DiscordMessage>
            <DiscordMessage profile='bentoBot' timestamp='08/15/2021'>
                <DiscordEmbed slot='embeds' color="#EB6E4B" thumbnail='http://openweathermap.org/img/w/03n.png' authorName='Banner#1017' authorImage='https://cdn.discordapp.com/avatars/232584569289703424/cc5e8923f457d9e00fc9605afe3da368.png?size=1024' embedTitle='Clouds ☁️ ️in Copenhagen, Denmark 🇩🇰' footerImage='https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg' timestamp='08/15/2021'>
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
                    <span slot="footer">Powered by OpenWeather  </span>
                </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage profile='enter' timestamp='08/15/2021'>?weather seoul</DiscordMessage>
            <DiscordMessage profile='bentoBot' timestamp='08/15/2021'>
                <DiscordEmbed slot='embeds' color="#EB6E4B" thumbnail='http://openweathermap.org/img/w/01n.png' authorName='OpenWeather' authorImage='https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg' embedTitle='Clear ☀️ in Seoul, Republic of Korea 🇰🇷' footerImage='https://pbs.twimg.com/profile_images/1173919481082580992/f95OeyEW_400x400.jpg' timestamp='08/15/2021'>
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
                </DiscordEmbed>
            </DiscordMessage>
        </DiscordMessages>
    )
}