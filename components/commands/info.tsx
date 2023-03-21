import { commandsList } from "../../util/commandsJSONList";
import CommandsParent from "./commandsParent";

interface infoCommandsInterface {
	name: string;
	aliases: string[];
	category: string;
	description: string;
	usage: string;
}

export const infoCommands: Array<infoCommandsInterface> = [];

for (const infoCommand of commandsList) {
	if (infoCommand.category === "info") {
		infoCommands.push(infoCommand);
	}
}

export default function Info() {
	return (
		<div>
			<CommandsParent items={infoCommands} />
		</div>
	);
}
