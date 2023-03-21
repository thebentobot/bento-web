import { commandsList } from "../../util/commandsJSONList";
import CommandsParent from "./commandsParent";

interface featureCommandsInterface {
	name: string;
	aliases: string[];
	category: string;
	description: string;
	usage: string;
}

export const featureCommands: Array<featureCommandsInterface> = [];

for (const featureCommand of commandsList) {
	if (featureCommand.category === "features") {
		featureCommands.push(featureCommand);
	}
}

export default function Features() {
	return (
		<div>
			<CommandsParent items={featureCommands} />
		</div>
	);
}
