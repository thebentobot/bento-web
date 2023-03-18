import { commandsList } from "../../util/commandsJSONList";
import CommandsParent from "./commandsParent";

interface userCommandsInterface {
	name: string;
	aliases: string[];
	category: string;
	description: string;
	usage: string;
}

export const userCommands: Array<userCommandsInterface> = [];

for (const userCommand of commandsList) {
	if (userCommand.category === "user") {
		userCommands.push(userCommand);
	}
}

export default function User() {
	return (
		<div>
			<CommandsParent items={userCommands} />
		</div>
	);
}
