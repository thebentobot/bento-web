import { DiscordMention, DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";

export default function Bye3() {
	return (
		<DiscordMessages>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b">
				Goodbye <DiscordMention type="user">Boo</DiscordMention>!
			</DiscordMessage>
		</DiscordMessages>
	);
}
