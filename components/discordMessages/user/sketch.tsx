import { DiscordMention, DiscordMessage, DiscordMessages, DiscordAttachments, DiscordAttachment } from '@skyra/discord-components-react';

export default function Sketch() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>
                ?rank
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890437163316019210/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch fm toggle
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm board has been successfully enabled.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch birthday 25 November
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your birthday has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch timezone Europe/Copenhagen
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your timezone has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch bgpic <a href='https://images.squarespace-cdn.com/content/v1/54faf78ce4b04da0abdfbde8/1570364008766-DFW0IM5N382E3UNAOZ36/Thaiboy-6.jpg'>https://images.squarespace-cdn.com/content/v1/54faf78ce4b04da0abdfbde8/1570364008766-DFW0IM5N382E3UNAOZ36/Thaiboy-6.jpg</a>
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your background URL has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch overlay opacity 50
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your overlay colour opacity has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?rank
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890440054839836723/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch description add {"My new album Back to life otw"} {"Nobody is rdy not even me"}
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your description has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch fm bg colour #FFFFFF
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm board background colour has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch fm bg opacity 50
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm board background colour opacity has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch xpboard bg colour #FFFFFF
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your xp board background colour has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch xpboard bg opacity 50
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your xp board background colour opacity has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch fm song colour #000000
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm song text colour has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch fm artist colour #000000
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> your lastfm artist text colour has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch xpboard text colour #000000
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> both your xp board text colours has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?rank
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890460899851239444/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch xpboard bar colour #FFFFFF #DC2626 #FFFFFF
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> both your xp bar colours has been set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch xpboard bar opacity 75 75 75
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> both your xp bar colour opacity values has been successfully set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?sketch xpboard barbg opacity 25
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordMention type='user' highlight>Banner</DiscordMention> both your xp bar bg colour opacity values has been successfully set.
            </DiscordMessage>
            <DiscordMessage profile='banner'>
                ?rank
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordAttachments>
                    <DiscordAttachment url='https://cdn.discordapp.com/attachments/790353119795871747/890611687214940240/Banner_profile.png' width={375} height={250}>

                    </DiscordAttachment>
                </DiscordAttachments>
            </DiscordMessage>
        </DiscordMessages>
    )
}