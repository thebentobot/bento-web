import {
	DiscordEmbed,
	DiscordEmbedDescription,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordEmbedFooter,
	DiscordMention,
	DiscordMessage,
	DiscordMessages,
} from "@skyra/discord-components-react";
import moment from "moment";
import Link from "next/link";
import { alonzoAvatar, bannerAvatar } from "../../../pages/_app";

export default function MessageLog() {
	return (
		<DiscordMessages>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b" timestamp={moment().toDate()}>
				<DiscordEmbed
					slot="embeds"
					color="#FFF000"
					authorName="alonzo#0011 (userID: 370695349167325196)"
					authorImage={alonzoAvatar}
				>
					<DiscordEmbedDescription slot="description">
						<Link
							target="_blank"
							rel="noopener noreferrer"
							href="https://discord.com/channels/714496317522444352/714836721979621448/873246980267180032"
						>
							Message
						</Link>{" "}
						edited in <DiscordMention type="channel">bot-channel</DiscordMention>
						<br />
						<strong>Before: </strong>
						Banner I never said hi back
						<br />
						<strong>After: </strong>
						Banner u never said hi back
					</DiscordEmbedDescription>
					<DiscordEmbedFields slot="fields">
						<DiscordEmbedField fieldTitle="Channel ID" inline inlineIndex={1}>
							714836721979621448
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Message ID" inline inlineIndex={1}>
							873246980267180032
						</DiscordEmbedField>
					</DiscordEmbedFields>
					<DiscordEmbedFooter slot="footer" timestamp={moment().toDate()}>
						Updated at
					</DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b" timestamp={moment().toDate()}>
				<DiscordEmbed
					slot="embeds"
					color="#FF2D00"
					authorName="Banner (userID: 232584569289703424)"
					authorImage={bannerAvatar}
				>
					<DiscordEmbedDescription slot="description">
						Message deleted in <DiscordMention type="channel">bot-channel</DiscordMention>
						<br />
						<strong>Deleted message: </strong>
						?commands
						<DiscordEmbedFields slot="fields">
							<DiscordEmbedField fieldTitle="Channel ID" inline inlineIndex={1}>
								714827748555620364
							</DiscordEmbedField>
							<DiscordEmbedField fieldTitle="Message ID" inline inlineIndex={1}>
								874286860342534175
							</DiscordEmbedField>
						</DiscordEmbedFields>
					</DiscordEmbedDescription>
					<DiscordEmbedFooter slot="footer" timestamp={moment().toDate()}>
						Deleted at
					</DiscordEmbedFooter>
				</DiscordEmbed>
			</DiscordMessage>
		</DiscordMessages>
	);
}
