import { DiscordMention, DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";

export default function Sketch3() {
	return (
		<DiscordMessages>
			<DiscordMessage author="Fiji Spring Water" avatar="/fiji.webp" roleColor="#00B2FF">
				?sketch sidebar colour #FFFFFF
			</DiscordMessage>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b">
				<DiscordMention type="user">Fiji Spring Water</DiscordMention> your sidebar colour has been set.
			</DiscordMessage>
			<DiscordMessage author="Fiji Spring Water" avatar="/fiji.webp" roleColor="#00B2FF">
				?sketch sidebar rank server #FCD34D
			</DiscordMessage>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b">
				<DiscordMention type="user">Fiji Spring Water</DiscordMention> your sidebar server rank colour has been set.
			</DiscordMessage>
		</DiscordMessages>
	);
}
