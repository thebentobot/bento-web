// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../util/prisma";

interface Rankings {
	rank: string;
	level?: number;
	xp?: number;
	bento?: number;
	userID: string;
	avatarURL: string;
	username: string;
	discriminator: string;
}

export async function getData() {
	const globalRank: Array<Rankings> = await prisma.$queryRaw`
  SELECT row_number() over (ORDER BY t.level DESC, t.xp DESC) AS rank, t.level, t.xp, t.username, t.discriminator, t."avatarURL"
  FROM "user" AS t
  GROUP BY t.level, t.xp, t.username, t.discriminator, t."avatarURL"
  ORDER BY t.level DESC, t.xp DESC
  LIMIT 50;`;
	const parsedLmao = JSON.parse(
		JSON.stringify(
			globalRank,
			(key, value) => (typeof value === "bigint" ? value.toString() : value), // return everything else unchanged
		),
	) as Rankings[];
	return parsedLmao;
}
