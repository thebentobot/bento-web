// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { patreon } from "@prisma/client";
import { prisma } from "../../../util/prisma";

export async function getData() {
	const patreonFollowerData = await prisma.patreon.findMany({
		where: {
			follower: true,
		},
	});
	const parsedLmao = JSON.parse(
		JSON.stringify(
			patreonFollowerData,
			(key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
		),
	) as patreon[];
	return parsedLmao;
}
