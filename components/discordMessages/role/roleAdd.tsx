import { DiscordEmbedDescription, DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";

export default function RoleAdd() {
	return (
		<DiscordMessages>
			<DiscordMessage author="Banner" avatar="/banner.webp" roleColor="#ff00fa">
				?role add sub news: News, News: News
			</DiscordMessage>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b">
				<DiscordEmbedDescription slot="description">
					<strong>Role commands added: </strong> News, News
					<br />
					<strong>Available role added: </strong> News
					<br />
					<strong>Available role exists: </strong> News
				</DiscordEmbedDescription>
			</DiscordMessage>
		</DiscordMessages>
	);
}
