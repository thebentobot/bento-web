import { DiscordMessage, DiscordMessages, DiscordReaction, DiscordReactions } from '@skyra/discord-components-react';
// 'position:relative; padding-bottom:calc(56.25% + 44px)'
export default function Gif() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>
                ?gif ecco2k
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                <div style={{position: 'relative', paddingBottom: 'calc(56.25% + 44px)'}}><iframe src='https://gfycat.com/ifr/SplendidScholarlyDiscus' frameBorder='0' scrolling='no' width='100%' height='100%' style={{position: 'absolute', top: '0', left: '0'}} allowFullScreen></iframe></div>
            </DiscordMessage>
            <DiscordMessage profile='enter'>
                ?gif yeonjung --multi --count 30
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
                Current Gfycat: 10/30 <br />
                <strong>Yeonjung</strong> <br />
                Made by <a href='https://gfycat.com/@theangrycamel'>https://gfycat.com/@theangrycamel</a> <br />
                6058 Views <br />
                Tuesday, August 30th 2016, 3:30 PM +00:00 <br />
                <a href='https://gfycat.com/DistortedMassiveAvocet'>https://gfycat.com/DistortedMassiveAvocet</a>
                <div style={{position: 'relative', paddingBottom: 'calc(56.25% + 44px)'}}><iframe src='https://gfycat.com/ifr/DistortedMassiveAvocet' frameBorder='0' scrolling='no' width='100%' height='100%' style={{position: 'absolute', top: '0', left: '0'}} allowFullScreen></iframe></div>
                <DiscordReactions slot="reactions">
                    <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/left-arrow_2b05-fe0f.png"></DiscordReaction>
                    <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/right-arrow_27a1-fe0f.png"></DiscordReaction>
                    <DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/cross-mark_274c.png"></DiscordReaction>
                </DiscordReactions>
            </DiscordMessage>
        </DiscordMessages>
    )
}