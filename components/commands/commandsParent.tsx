import CommandChild from "./commandChild";

interface commandsInterface {
	name: string;
	aliases: string[];
	category: string;
	description: string;
	usage: string;
}

interface commandsListInterface {
	items: commandsInterface[];
}

export default function CommandsParent({ items }: commandsListInterface) {
	const i = 0;
	return (
		<ul className="relative">
			{items.map((command) => (
				<div key={i} className="shadow-lg">
					<CommandChild
						key={i}
						name={command.name}
						aliases={command.aliases}
						category={command.category}
						description={command.description}
						usage={command.usage}
					/>
				</div>
			))}
		</ul>
	);
}
