import { DiscordMention, DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";

export default function PrefixExample() {
	return (
		<DiscordMessages>
			<DiscordMessage timestamp="08/15/2021" author="Adam" avatar="/adam.webp" roleColor="#00B2FF" highlight>
				<DiscordMention>Bento</DiscordMention> time tokyo
			</DiscordMessage>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b" timestamp="08/15/2021">
				It is Aug 16, 2021 5:10 AM in Tokyo, Japan 🇯🇵
			</DiscordMessage>
		</DiscordMessages>
	);
}
