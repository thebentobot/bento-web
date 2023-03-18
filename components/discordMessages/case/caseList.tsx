import {
	DiscordEmbed,
	DiscordEmbedDescription,
	DiscordEmbedFooter,
	DiscordMessage,
	DiscordMessages,
	DiscordReaction,
	DiscordReactions,
} from "@skyra/discord-components-react";

export default function CaseList() {
	return (
		<DiscordMessages>
			<DiscordMessage author="Banner" avatar="/banner.webp" roleColor="#ff00fa">
				?case list mute 2021-07-01 2021-08-25
			</DiscordMessage>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b">
				Current page: 1/2
				<DiscordEmbed
					slot="embeds"
					color="#ffd903"
					embedTitle="Mute Case List for Bento Bot between 2021-07-01 and 2021-08-25"
					authorName="Bento"
					authorImage="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
					thumbnail="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
				>
					<DiscordEmbedDescription slot="description">
						<strong>Mute Case Number 20:</strong> Adaam#3206. August 15th 2021.
						<br />
						<strong>Mute Case Number 19:</strong> azu#1931. August 15th 2021.
						<br />
						<strong>Mute Case Number 18:</strong> azu#1931. August 15th 2021.
						<br />
						<strong>Mute Case Number 17:</strong> alonzo#0011. August 13th 2021.
						<br />
						<strong>Mute Case Number 16:</strong> alonzo#0011. August 12th 2021.
						<br />
						<strong>Mute Case Number 13:</strong> alonzo#0011. August 7th 2021.
						<br />
						<strong>Mute Case Number 12:</strong> alonzo#0011. August 7th 2021.
						<br />
						<strong>Mute Case Number 11:</strong> alonzo#0011. August 6th 2021.
						<br />
						<strong>Mute Case Number 10:</strong> alonzo#0011. July 30th 2021.
						<br />
						<strong>Mute Case Number 9:</strong> alonzo#0011. July 30th 2021.
						<br />
					</DiscordEmbedDescription>
					<DiscordEmbedFooter
						slot="footer"
						footerImage="https://cdn.discordapp.com/avatars/787041583580184609/fb64cda098372e05fc6945b9d17386dc.png?size=1024"
					>
						Amount of mute cases: 13
					</DiscordEmbedFooter>
				</DiscordEmbed>
				<DiscordReactions slot="reactions">
					<DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/left-arrow_2b05-fe0f.png"></DiscordReaction>
					<DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/282/right-arrow_27a1-fe0f.png"></DiscordReaction>
					<DiscordReaction emoji="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/whatsapp/273/cross-mark_274c.png"></DiscordReaction>
				</DiscordReactions>
			</DiscordMessage>
		</DiscordMessages>
	);
}
