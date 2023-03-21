import { DiscordMention, DiscordMessage, DiscordMessages } from "@skyra/discord-components-react";

export default function Prune() {
	return (
		<div>
			<p className="text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto">
				This deletes the last 50 messages in the channel you used the command in.
			</p>
			<DiscordMessages>
				<DiscordMessage author="Banner" avatar="/banner.webp" roleColor="#ff00fa">
					?prune 50
				</DiscordMessage>
			</DiscordMessages>
			<p className="text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto">
				This deletes the last 100 messages by <DiscordMention type="user">alonzo</DiscordMention> in the channel you
				used the command in.
			</p>
			<DiscordMessages>
				<DiscordMessage author="Banner" avatar="/banner.webp" roleColor="#ff00fa">
					?prune 100 <DiscordMention type="user">alonzo</DiscordMention>
				</DiscordMessage>
			</DiscordMessages>
			<p className="text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto">
				This deletes the last 100 messages by <DiscordMention type="user">alonzo</DiscordMention> in the channel where
				the id is 714825973908111420.
			</p>
			<DiscordMessages>
				<DiscordMessage author="Banner" avatar="/banner.webp" roleColor="#ff00fa">
					?prune 100 <DiscordMention type="user">alonzo</DiscordMention> 714825973908111420
				</DiscordMessage>
			</DiscordMessages>
			<p className="text-xl py-2 whitespace-pre-line text-gray-300 text-opacity-50 sm:text-xl group-hover:text-opacity-100 text-center max-w-xl mx-auto">
				This deletes the last 100 messages by <DiscordMention type="user">alonzo</DiscordMention> in all channels on the
				server.
			</p>
			<DiscordMessages>
				<DiscordMessage author="Banner" avatar="/banner.webp" roleColor="#ff00fa">
					?prune 100 <DiscordMention type="user">alonzo</DiscordMention> all
				</DiscordMessage>
			</DiscordMessages>
		</div>
	);
}
