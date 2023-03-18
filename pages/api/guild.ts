// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { guild } from "@prisma/client";
import { prisma } from "../../util/prisma";

export async function getData(guildID: string) {
	const guildData = await prisma.guild.findUnique({
		where: {
			guildID: BigInt(guildID),
		},
	});
	const parsedLmao = JSON.parse(
		JSON.stringify(
			guildData,
			(key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
		),
	) as guild;
	return parsedLmao;
}
