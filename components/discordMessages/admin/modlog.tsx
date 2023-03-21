import {
	DiscordEmbed,
	DiscordEmbedDescription,
	DiscordEmbedField,
	DiscordEmbedFields,
	DiscordMessage,
	DiscordMessages,
} from "@skyra/discord-components-react";
import moment from "moment";
import { alonzoAvatar, bannerAvatar } from "../../../pages/_app";

export default function ModLog() {
	return (
		<DiscordMessages>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b" timestamp={moment().toDate()}>
				<DiscordEmbed
					slot="embeds"
					color="#000000"
					embedTitle="Banner’s lab rat (alonzo#0011) was muted for 8 hours!"
					authorName="Banner#1017"
					authorImage={bannerAvatar}
					thumbnail={alonzoAvatar}
				>
					<DiscordEmbedDescription slot="description">
						This user has been muted <strong>10 times</strong> on this server
					</DiscordEmbedDescription>
					<DiscordEmbedFields slot="fields">
						<DiscordEmbedField fieldTitle="Reason" inline inlineIndex={1}>
							Annoying
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Username" inline inlineIndex={1}>
							alonzo#0011
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="User ID" inline inlineIndex={1}>
							370695349167325196
						</DiscordEmbedField>
						<DiscordEmbedField fieldTitle="Muted by" inline inlineIndex={1}>
							Banner#1017
						</DiscordEmbedField>
					</DiscordEmbedFields>
					<span slot="footer">Mute Case Number: 17 </span>
				</DiscordEmbed>
			</DiscordMessage>
			<DiscordMessage author="Bento" avatar="/bento.png" bot verified roleColor="#f9d61b">
				A channel called <strong>report-bugs</strong> under the category <strong>#Bento Bot</strong> was created at{" "}
				<strong>Thu Aug 05 2021 23:39:30 GMT+0000 (Coordinated Universal Time).</strong>
				<br />
				Get more info in the audit log.
			</DiscordMessage>
		</DiscordMessages>
	);
}
