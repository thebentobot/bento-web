import { DiscordMessage, DiscordMessages } from '@skyra/discord-components-react'

export default function Ban() {
    return (
        <DiscordMessages>
            <DiscordMessage author="Enter" avatar="/enter.webp" roleColor='#03f611'>
                ?ban 539520835824779265 testing Bento Bot’s capabilities. No appeal.
            </DiscordMessage>
            <DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor='#f9d61b'>
            <strong>Boo#8000</strong> was successfully <strong>banned</strong> on this server.
            <br />
            <strong>Case number: 1.</strong>
            <br />
            <strong>Reason: </strong> testing Bento Bot’s capabilities. No appeal.
            <br />
            You can add notes for this ban by using the case command, together with the case number.
            </DiscordMessage>
        </DiscordMessages>
    )
}