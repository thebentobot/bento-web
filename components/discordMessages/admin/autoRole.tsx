import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function AutoRole() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>
                ?autorole set <DiscordMention type='role' color='#01ff00'>Tester</DiscordMention>
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            Your role <DiscordMention type='role' color='#01ff00'>Tester</DiscordMention> was set as an auto role.
            <br></br>
            To see a list of your auto roles use <code>?autorole list</code>
            </DiscordMessage>
        </DiscordMessages>
    )
}