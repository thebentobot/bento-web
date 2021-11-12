import { DiscordMention, DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function RoleAdd() {
    return (
        <DiscordMessages>
            <DiscordMessage profile='banner'>
            ?role add sub news: News, News: News
            </DiscordMessage>
            <DiscordMessage profile='bentoBot'>
            <strong>Role commands added: </strong> News, News
            <br />
            <strong>Available role added: </strong> News
            <br />
            <strong>Available role exists: </strong> News
            </DiscordMessage>
        </DiscordMessages>
    )
}