import {
	DiscordEmbed,
	DiscordEmbedDescription,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordEmbedFooter,
	DiscordMessage,
	DiscordMessages,
} from "@skyra/discord-components-react";
import { alonzoAvatar } from "../../../pages/_app";

export default function CaseEdit() {
	return (
		<DiscordMessages>
			<DiscordMessage author="Banner" avatar="/banner.webp" roleColor="#ff00fa">
				?case edit warning 1 note he may get the mute mask in the future muahaha
			</DiscordMessage>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b">
				<DiscordEmbed
					slot="embeds"
					color="#ffd903"
					embedTitle="Warning Case Number 1's note was updated!"
					authorName="Bento Bot"
					authorImage="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
					thumbnail={alonzoAvatar}
				>
					<DiscordEmbedDescription slot="description">
						<strong>Original note</strong>
						<br />
						null
						<br />
						<strong>New note</strong>
						<br />
						he may get the mute mask in the future muahaha
					</DiscordEmbedDescription>
					<DiscordEmbedFields slot="fields">
						<DiscordEmbedField fieldTitle="Case User" inline inlineIndex={1}>
							Alonzo#0011
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="UserID" inline inlineIndex={1}>
							370695349167325196
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Reason" inline inlineIndex={1}>
							behave young man 😏
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Date of occurence" inline inlineIndex={1}>
							Thursday, July 22nd 2021, 22:47:53 PM +00:00
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="User who warned" inline inlineIndex={1}>
							Banner#1017
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="UserID for the user who warned" inline inlineIndex={1}>
							232584569289703424
						</DiscordEmbedField>
					</DiscordEmbedFields>
					<DiscordEmbedFooter
						slot="footer"
						footerImage="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
					>
						Warning Case Number: 1
					</DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}
