import {
	DiscordEmbed,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordEmbedFooter,
	DiscordMessage,
	DiscordMessages,
} from "@skyra/discord-components-react";
import moment from "moment";

export default function Settings() {
	return (
		<DiscordMessages>
			<DiscordMessage author="Fiji Spring Water" avatar="/fiji.webp" roleColor="#00B2FF">
				?settings
			</DiscordMessage>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b" timestamp={moment().toDate()}>
				<DiscordEmbed
					slot="embeds"
					color="#f9d61b"
					authorName="Bento"
					authorImage="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
					authorUrl="/"
					embedTitle="Server settings for Bento Bot"
				>
					<DiscordEmbedFields slot="fields">
						<DiscordEmbedField fieldTitle="Tiktok" inline inlineIndex={1}>
							Enabled
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Media" inline inlineIndex={2}>
							Enabled
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Leaderboard" inline inlineIndex={3}>
							Enabled
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Server name enabled for global cases" inline inlineIndex={1}>
							Disabled
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Case reasons enabled for global cases" inline inlineIndex={2}>
							Disabled
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Welcome Messages" inline inlineIndex={3}>
							Disabled
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Bye Messages" inline inlineIndex={1}>
							Disabled
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Mod log channel" inline inlineIndex={2}>
							Not configured
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Message log channel" inline inlineIndex={3}>
							Not configured
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Mute role" inline inlineIndex={1}>
							Not configured
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Auto assigned role" inline inlineIndex={1}>
							Not configured
						</DiscordEmbedField>
					</DiscordEmbedFields>
					<DiscordEmbedFooter
						slot="footer"
						footerImage="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
					></DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}
