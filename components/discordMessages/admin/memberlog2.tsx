import { DiscordEmbed, DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react';
import moment from 'moment';

export default function MemberLog2() {
    return (
        <div>
        <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
            <DiscordEmbed slot='embeds' color="#00ff1a" authorName='alonzo#0011 (userID: 370695349167325196)' authorImage='https://cdn.discordapp.com/avatars/370695349167325196/b4b86fc02a6be67825aee4d559b142e5.png?size=1024' timestamp={moment().toDate()}>
                Nickname updated for this user.
                <p className='font-bold'>Previous nickname:</p>
                i love you banner
                <p className='font-bold'>New nickname:</p>
                Banner’s Lab Rat
                <span slot="footer">Updated at </span>
            </DiscordEmbed>
            </DiscordMessage>
            </DiscordMessages>
            <div className='hidden lg:contents'>
            <DiscordMessages>
            <DiscordMessage profile='bentoBot'>
            <DiscordEmbed slot='embeds' embedTitle='Adaam#3206 joined the server!' color="#00ff1a" timestamp={moment().toDate()} thumbnail='https://cdn.discordapp.com/avatars/223908083825377281/bca17fe842890a45c12dc58fb0b4be45.png?size=1024'>
                <strong>Account created:</strong> 9/9/2016 20:50:47 +00:00
                <br />
                <strong >Bans on other servers:</strong> <code>0</code>
                <br />
                <strong >Kicks on other servers:</strong> <code>0</code>
                <br />
                <strong >Mutes on other servers:</strong> <code>0</code>
                <br />
                <strong >Warnings on other servers:</strong> <code>0</code>
                <span slot="footer">UserID: 223908083825377281 </span>
            </DiscordEmbed>
            </DiscordMessage>
            </DiscordMessages>
            </div>
        </div>
    )
}