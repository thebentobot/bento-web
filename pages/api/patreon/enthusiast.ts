// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { patreon } from "@prisma/client";
import { prisma } from "../../../util/prisma";

export async function getData() {
	const patreonEnthusiastData = await prisma.patreon.findMany({
		where: {
			enthusiast: true,
		},
	});
	const parsedLmao = JSON.parse(
		JSON.stringify(
			patreonEnthusiastData,
			(key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
		),
	) as patreon[];
	return parsedLmao;
}
