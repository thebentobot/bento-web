// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { prisma } from "../../../util/prisma";

export async function getData() {
	const serverData = await prisma.guild.count();
	return { count: serverData };
}
