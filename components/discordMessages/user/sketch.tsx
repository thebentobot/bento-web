import { DiscordMention, DiscordMessage, DiscordMessages, DiscordAttachments, DiscordAttachment } from '@skyra/discord-components-react'

export default function Sketch() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?rank
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890437163316019210/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch fm toggle
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm board has been successfully enabled.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch birthday 25 November
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your birthday has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch timezone Europe/Copenhagen
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your timezone has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch bgpic <a href='https://images.squarespace-cdn.com/content/v1/54faf78ce4b04da0abdfbde8/1570364008766-DFW0IM5N382E3UNAOZ36/Thaiboy-6.jpg'>https://images.squarespace-cdn.com/content/v1/54faf78ce4b04da0abdfbde8/1570364008766-DFW0IM5N382E3UNAOZ36/Thaiboy-6.jpg</a>
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your background URL has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch overlay opacity 50
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your overlay colour opacity has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?rank
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890440054839836723/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch description add {"My new album Back to life otw"} {"Nobody is rdy not even me"}
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your description has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch fm bg colour #FFFFFF
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm board background colour has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch fm bg opacity 50
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm board background colour opacity has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch xpboard bg colour #FFFFFF
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your xp board background colour has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch xpboard bg opacity 50
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your xp board background colour opacity has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch fm song colour #000000
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm song text colour has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch fm artist colour #000000
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm artist text colour has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch xpboard text colour #000000
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> both your xp board text colours has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?rank
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890460899851239444/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch xpboard bar colour #FFFFFF #DC2626 #FFFFFF
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> both your xp bar colours has been set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch xpboard bar opacity 75 75 75
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> both your xp bar colour opacity values has been successfully set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?sketch xpboard barbg opacity 25
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> both your xp bar bg colour opacity values has been successfully set.
            </DiscordMessage>
            <DiscordMessage author="Banner" avatar="/banner.png" roleColor='#ff00fa'>
                ?rank
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890611687214940240/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
        </DiscordMessages>
    )
}