import { DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions } from '@skyra/discord-components-react'
import moment from 'moment'

export default function LeaderboardMessage() {
    return (
        <DiscordMessages>
            <DiscordMessage timestamp='08/16/2021' profile='fiji'>?lb global</DiscordMessage>
            <DiscordMessage timestamp='08/16/2021' profile='bentoBot'>
                Current Page 1/5
                <DiscordEmbed slot='embeds' timestamp='08/16/2021' color="#ffd903" embedTitle='Leaderboard for Bento' thumbnail='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024'>
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle={`1. Mig Ysrael#0360`} inline inlineIndex={1}>Level 24, 3864 XP</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`2. Fiji Spring Water#1949`} inline inlineIndex={1}>Level 21, 37139 XP</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`3. Banner#1017`} inline inlineIndex={1}>Level 21, 12943 XP</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`4. Kaue#5775`} inline inlineIndex={1}>Level 20, 19478 XP</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`5. azu#1931`} inline inlineIndex={1}>Level 18, 18127 XP</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`6. Nate#3900`} inline inlineIndex={1}>Level 16, 22740 XP</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`7. Average Black Guy#2914`} inline inlineIndex={1}>Level 16, 10757 XP</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`8. Adaam#3206`} inline inlineIndex={1}>Level 16, 5513 XP</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`9. BendixDrippy2X#1877`} inline inlineIndex={1}>Level 15, 15777 XP</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`10. Sev#1116`} inline inlineIndex={1}>Level 15, 9912 XP</DiscordEmbedField>
                </DiscordEmbedFields>
                </DiscordEmbed>
                <DiscordReactions slot="reactions">
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/left-arrow_2b05-fe0f.png"></DiscordReaction>
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/right-arrow_27a1-fe0f.png"></DiscordReaction>
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/cross-mark_274c.png"></DiscordReaction>
                    </DiscordReactions>
            </DiscordMessage>
            <DiscordMessage timestamp='08/16/2021' profile='lewis'>?lb bento global</DiscordMessage>
            <DiscordMessage timestamp='08/16/2021' profile='bentoBot'>
                Current Page 1/5
                <DiscordEmbed slot='embeds' timestamp='08/16/2021' color="#ffd903" embedTitle='Bento 🍱 Leaderboard for Bento' thumbnail='https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024'>
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle={`1. alonzo#0011`} inline inlineIndex={1}>48 Bento 🍱</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`2. tzuwy#0001`} inline inlineIndex={1}>47 Bento 🍱</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`3. Mig Ysrael#0360`} inline inlineIndex={1}>43 Bento 🍱</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`4. Banner#1017`} inline inlineIndex={1}>33 Bento 🍱</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`5. Lewis#4718`} inline inlineIndex={1}>14 Bento 🍱</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`6. danladnufc#8019`} inline inlineIndex={1}>9 Bento 🍱</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`7. Homeboywill#9721`} inline inlineIndex={1}>7 Bento 🍱</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`8. Thunduh#7777`} inline inlineIndex={1}>7 Bento 🍱</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`9. Adaam#3206`} inline inlineIndex={1}>6 Bento 🍱</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle={`10. Fiji Spring Water#1949`} inline inlineIndex={1}>5 Bento 🍱</DiscordEmbedField>
                </DiscordEmbedFields>
                </DiscordEmbed>
                <DiscordReactions slot="reactions">
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/left-arrow_2b05-fe0f.png"></DiscordReaction>
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/right-arrow_27a1-fe0f.png"></DiscordReaction>
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/cross-mark_274c.png"></DiscordReaction>
                    </DiscordReactions>
            </DiscordMessage>
        </DiscordMessages>
    )
}