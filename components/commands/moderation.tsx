import { commandsList } from "../../util/commandsJSONList";
import CommandsParent from "./commandsParent";

interface moderationCommandsInterface {
	name: string;
	aliases: string[];
	category: string;
	description: string;
	usage: string;
}

export const moderationCommands: Array<moderationCommandsInterface> = [];

for (const moderationCommand of commandsList) {
	if (moderationCommand.category === "moderation") {
		moderationCommands.push(moderationCommand);
	}
}

export default function Moderation() {
	return (
		<div>
			<CommandsParent items={moderationCommands} />
		</div>
	);
}
