// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { patreon } from "@prisma/client";
import { prisma } from "../../../util/prisma";

export async function getData() {
	const patreonDiscipleData = await prisma.patreon.findMany({
		where: {
			disciple: true,
		},
	});
	const parsedLmao = JSON.parse(
		JSON.stringify(
			patreonDiscipleData,
			(key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
		),
	) as patreon[];
	return parsedLmao;
}
