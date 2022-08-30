import { DiscordEmbed, DiscordEmbedDescription, DiscordEmbedField, DiscordEmbedFields, DiscordEmbedFooter, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions } from '@skyra/discord-components-react'
import moment from 'moment'
import { alonzoAvatar, bannerAvatar } from '../../../pages/_app'

export default function CaseDelete() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.webp" roleColor='#ff00fa'>?case delete warning 3</DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            <DiscordEmbed slot='embeds' color="#ffd903" embedTitle='Are you sure that you want to delete Warning Case Number 3: Banner’s Lab Rat(alonzo#0011)' authorName='Banner#1017' authorImage={bannerAvatar} thumbnail={alonzoAvatar}>
            <DiscordEmbedDescription slot='description'>
                <strong>Reason for Warning</strong>
                <br />
                trying to fill me with bs
                </DiscordEmbedDescription>
                <DiscordEmbedFields slot='fields'>
                        <DiscordEmbedField fieldTitle='UserID' inline inlineIndex={1}>370695349167325196</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Date of occurence' inline inlineIndex={1}>Friday, July 30th 2021, 05:12:20 AM +00:00</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='User who gave the warning' inline inlineIndex={1}>Banner#1017</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='UserID for the User who gave the warning' inline inlineIndex={1}>232584569289703424</DiscordEmbedField>
                        <DiscordEmbedField fieldTitle='Notes about this case' inline inlineIndex={1}>he is annoying he will get the boot at some point definitely</DiscordEmbedField>
                </DiscordEmbedFields>
                <DiscordEmbedFooter
              slot="footer"
              footerImage="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
            >
              Warning Case Number: 3
            </DiscordEmbedFooter>
                </DiscordEmbed>
                <DiscordReactions slot="reactions">
                        <DiscordReaction emoji="https://emojipedia-us.s3.amazonaws.com/source/skype/289/check-mark_2714-fe0f.png"></DiscordReaction>
                        <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/cross-mark_274c.png"></DiscordReaction>
                    </DiscordReactions>
            </DiscordMessage>
        </DiscordMessages>
    )
}