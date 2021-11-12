import { DiscordAttachment, DiscordEmbed, DiscordEmbedField, DiscordEmbedFields, DiscordMention, DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions } from '@skyra/discord-components-react'
import moment from 'moment'
import { bannerAvatar, enterAvatar } from '../../../pages/_app'

export default function Lastfm() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='fiji'>?lastfm set Alqhaman</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                Last.fm username set to <code>Alqhaman</code>.
            </DiscordMessage>
            <DiscordMessage profile='enter'>?fm</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' color="#e4141e" authorName='Enter#0001' footerImage='https://www.last.fm/static/images/lastfm_avatar_twitter.52a5d69a85ac.png' authorImage={enterAvatar} authorUrl='https://www.last.fm/user/Enterxz' thumbnail='https://lastfm.freetls.fastly.net/i/u/300x300/3b96418b0b1321fc83a25ce14eea0643.jpg'>
                <strong>13 hours ago</strong>
                <br />
                <strong>Kanye West</strong> - <a href='https://www.last.fm/music/Kanye+West/_/Stronger'>Stronger</a>
                <br />
                From the album <strong>Graduation</strong>
                <br />
                <strong>13 hours ago</strong>
                <br />
                <strong>Kanye West</strong> - <a href='https://www.last.fm/music/Kanye+West/_/Gold+Digger'>Gold Digger</a>
                <br />
                From the album <strong>Late Registration</strong>
                <span slot="footer">Total Tracks: 72387 | Powered by last.fm  </span>
                </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage profile='enter'>?fm 232584569289703424</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' color="#e4141e" authorName='Banner#1017' footerImage='https://www.last.fm/static/images/lastfm_avatar_twitter.52a5d69a85ac.png' authorImage={bannerAvatar} authorUrl='https://www.last.fm/user/christiankn' thumbnail='https://lastfm.freetls.fastly.net/i/u/300x300/38400dfa7dfc156b978678a61d82d809.jpg'>
                <strong>2 hours ago</strong>
                <br />
                <strong>Toro y Moi </strong> - <a href='https://www.last.fm/music/Toro+y+Moi/_/Who+I+Am'>Who I Am</a>
                <br />
                From the album <strong>Outer Peace</strong>
                <br />
                <strong>3 hours ago</strong>
                <br />
                <strong>Kanye West</strong> - <a href='https://www.last.fm/music/Kanye+West/_/H%E2%80%A2A%E2%80%A2M'>H•A•M</a>
                <br />
                From the album <strong>Watch The Throne (Deluxe)</strong>
                <span slot="footer">Total Tracks: 78874 | Powered by last.fm  </span>
                </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage profile='banner'>?fm toptracks 1month</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' embedTitle='Top tracks for Banner#1017' url='https://www.last.fm/user/christiankn/library/tracks?date_preset=LAST_30_DAYS' color="#e4141e" authorName='Banner#1017' footerImage='https://www.last.fm/static/images/lastfm_avatar_twitter.52a5d69a85ac.png' authorImage={bannerAvatar} authorUrl='https://www.last.fm/user/christiankn' thumbnail='https://i.scdn.co/image/ab6761610000e5eb3a8619d4545d138019f4f6d9'>
                <strong>1. c2.0</strong> by <a href='https://www.last.fm/music/Charli+XCX/_/c2.0'>Charli XCX</a> - 39 plays
                <br />
                <strong>2. Paradise (feat. Hannah Diamond)</strong> by <a href='https://www.last.fm/music/Charli+XCX/_/Paradise+(feat.+Hannah+Diamond)'>Charli XCX</a> - 34 plays
                <br />
                <strong>3. party 4 u</strong> by <a href='https://www.last.fm/music/Charli+XCX/_/party+4+u'>Charli XCX</a> - 33 plays
                <br />
                <strong>4. forever</strong> by <a href='https://www.last.fm/music/Charli+XCX/_/forever'>Charli XCX</a> - 30 plays
                <br />
                <strong>5. Blowin’ Minds (Skateboard) (feat. A$AP Rocky, A$AP Nast, A$AP Ant, Chief Keef & Playboi Carti)</strong> by <a href='https://www.last.fm/music/A$AP+Mob/_/Blowin%27+Minds+(Skateboard)+(feat.+A$AP+Rocky,+A$AP+Nast,+A$AP+Ant,+Chief+Keef+&+Playboi+Carti)'>A$AP Mob</a> - 27 plays
                <br />
                <strong>6. anthems </strong> by <a href='https://www.last.fm/music/Charli+XCX/_/anthems'>Charli XCX</a> - 27 plays
                <br />
                <strong>7. claws </strong> by <a href='https://www.last.fm/music/Charli+XCX/_/claws'>Charli XCX</a> - 27 plays
                <br />
                <strong>8. hand crushed by a mallet</strong> by <a href='https://www.last.fm/music/100+gecs/_/hand+crushed+by+a+mallet'>100 gecs</a> - 25 plays
                <br />
                <strong>9. Roll with Me</strong> by <a href='https://www.last.fm/music/Charli+XCX/_/Roll+with+Me'>Charli XCX</a> - 23 plays
                <br />
                <strong>10. Take My Heart Away</strong> by <a href='https://www.last.fm/music/Danny+L+Harle/_/Take+My+Heart+Away'>Danny L Harle</a> - 23 plays
                <br />
                <span slot="footer">Time period - 1month | Powered by last.fm  </span>
                </DiscordEmbed>
                <DiscordReactions slot="reactions">
                    <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/left-arrow_2b05-fe0f.png"></DiscordReaction>
                    <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/right-arrow_27a1-fe0f.png"></DiscordReaction>
                    <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/cross-mark_274c.png"></DiscordReaction>
                </DiscordReactions>
            </DiscordMessage>
            <DiscordMessage profile='fiji'>?fm recent <DiscordMention type='user'>Banner</DiscordMention></DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' embedTitle='Recent tracks for Banner#1017' url='https://www.last.fm/user/christiankn/library/' color="#e4141e" authorName='Banner#1017' footerImage='https://www.last.fm/static/images/lastfm_avatar_twitter.52a5d69a85ac.png' authorImage={bannerAvatar} authorUrl='https://www.last.fm/user/christiankn' thumbnail='https://lastfm.freetls.fastly.net/i/u/300x300/38400dfa7dfc156b978678a61d82d809.jpg'>
                <strong>3 hours ago</strong> | Toro y Moi - <a href='https://www.last.fm/music/Toro+y+Moi/_/Who+I+Am'>Who I am</a>
                <br />
                <strong>3 hours ago</strong> | Kanye West - <a href='https://www.last.fm/music/Kanye+West/_/H%E2%80%A2A%E2%80%A2M'>H•A•M</a>
                <br />
                <strong>3 hours ago</strong> | The Internet - <a href='https://www.last.fm/music/The+Internet/_/Matt%27s+Apartment'>Matt’s Apartment</a>
                <br />
                <strong>3 hours ago</strong> | Travis Scott - <a href='https://www.last.fm/music/Travis+Scott/_/sweet+sweet'>sweet sweet</a>
                <br />
                <strong>3 hours ago</strong> | A$AP Rocky - <a href='https://www.last.fm/music/A$AP+Rocky/_/Lord+Pretty+Flacko+Jodye+2+(LPFJ2)'>Lord Pretty Flacko Jodye 2 (LPFJ2)</a>
                <br />
                <strong>3 hours ago</strong> | A$AP Rocky - <a href='https://www.last.fm/music/A$AP+Rocky/_/Sundress'>Sundress</a>
                <br />
                <strong>3 hours ago</strong> | Vince Staples - <a href='https://www.last.fm/music/Vince+Staples/_/Norf+Norf'>Norf Norf</a>
                <br />
                <strong>3 hours ago</strong> | Kero Kero Bonito - <a href='https://www.last.fm/music/Kero+Kero+Bonito/_/Dump'>Dump</a>
                <br />
                <strong>3 hours ago</strong> | Frank Ocean - <a href='https://www.last.fm/music/Frank+Ocean/_/Provider'>Provider</a>
                <br />
                <strong>3 hours ago</strong> | Bladee - <a href='https://www.last.fm/music/Bladee/_/I+Want+It+That+Way'>I Want It That Way</a>
                <br />
                <span slot="footer">Powered by last.fm  </span>
                </DiscordEmbed>
                <DiscordReactions slot="reactions">
                    <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/left-arrow_2b05-fe0f.png"></DiscordReaction>
                    <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/right-arrow_27a1-fe0f.png"></DiscordReaction>
                    <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/cross-mark_274c.png"></DiscordReaction>
                </DiscordReactions>
            </DiscordMessage>
            <DiscordMessage profile='banner'>?fm collage topalbums 6month <DiscordMention type='user'>Fiji Spring Water</DiscordMention> 4x4</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordAttachment height={300} width={300} url='https://cdn.discordapp.com/attachments/714836721979621448/898810063211347998/Alqhaman-6month-2021-10-16T055017.735Z.png'></DiscordAttachment>
            </DiscordMessage>
            {/* 
            <DiscordMessage profile='banner'>?fm wkt</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' embedTitle='Who in All the Cappermotes knows Kiss Me Through the Scope' color="#00fbff" authorName='Thaiboy Digital' footerImage='https://www.last.fm/static/images/lastfm_avatar_twitter.52a5d69a85ac.png' authorImage='https://i.scdn.co/image/ab6761610000e5ebbe2dfe98c26ead5955f58bcf' thumbnail='https://lastfm.freetls.fastly.net/i/u/300x300/4d36fa68a6aaa4c3806ca652d439b15a.jpg'>
                <strong>1.</strong> <DiscordMention type='user'>Fiji Spring Water</DiscordMention> - <strong>48 plays</strong>
                <br />
                <strong>2.</strong> <DiscordMention type='user'>Banner</DiscordMention> - <strong>48 plays</strong>
                <br />
                <strong>3.</strong> <DiscordMention type='user'>🔥Nam💖Yujeong🔥</DiscordMention> - <strong>5 plays</strong>
                <br />
                <strong>4.</strong> <DiscordMention type='user'>Averagee</DiscordMention> - <strong>1 play</strong>
                <br />
                <span slot="footer">Powered by last.fm  </span>
                </DiscordEmbed>
            </DiscordMessage>
            <DiscordMessage profile='fiji'>?fm gwk yung lean</DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <DiscordEmbed slot='embeds' embedTitle='Who in Bento knows Yung Lean' color="#003b00" footerImage='https://www.last.fm/static/images/lastfm_avatar_twitter.52a5d69a85ac.png' thumbnail='https://i.scdn.co/image/ab6761610000e5ebb4435845acb9da6f206af96c'>
                <strong>1.</strong> Fiji Spring Water#1949 - <strong>2355 plays</strong>
                <br />
                <strong>2.</strong> Banner#1017 - <strong>1260 plays</strong>
                <br />
                <strong>3.</strong> Nate#3900 - <strong>731 plays</strong>
                <br />
                <strong>4.</strong> Average Black Guy#2914 - <strong>290 plays</strong>
                <br />
                <strong>5.</strong> Seashore#2127 - <strong>139 plays</strong>
                <br />
                <strong>6.</strong> cretos#8132 - <strong>91 plays</strong>
                <br />
                <strong>7.</strong> azu#1931 - <strong>32 plays</strong>
                <br />
                <strong>8.</strong> RobbieB#0809 - <strong>12 plays</strong>
                <br />
                <strong>9.</strong> Leem#0214 - <strong>9 plays</strong>
                <br />
                <strong>10.</strong> grumpy#7594 - <strong>8 plays</strong>
                <br />
                <span slot="footer">Powered by last.fm  </span>
                </DiscordEmbed>
            </DiscordMessage>
            */}
        </DiscordMessages>
    )
}