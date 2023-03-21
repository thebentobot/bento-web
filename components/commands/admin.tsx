import { commandsList } from "../../util/commandsJSONList";
import CommandsParent from "./commandsParent";

interface adminCommandsInterface {
	name: string;
	aliases: string[];
	category: string;
	description: string;
	usage: string;
}

export const adminCommands: Array<adminCommandsInterface> = [];

for (const adminCommand of commandsList) {
	if (adminCommand.category === "admin") {
		adminCommands.push(adminCommand);
	}
}

export default function Admin() {
	return (
		<div className="">
			<CommandsParent items={adminCommands} />
		</div>
	);
}
