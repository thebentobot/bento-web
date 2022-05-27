// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../util/prisma'

interface Rankings {
    rank: string,
    level: number,
    xp: number,
    userID: string,
    avatarURL: string,
    username: string,
    discriminator: string
}

export async function getData(guildID: string) {
    const serverRank = await prisma.$queryRawUnsafe<Array<Rankings>>(`
    SELECT row_number() over (ORDER BY t.level DESC, t.xp DESC) as rank, t.level, t.xp, u.username, u.discriminator, t."avatarURL"
    FROM "guildMember" AS t
    INNER JOIN "user" u on u."userID" = t."userID"
    WHERE t."guildID" = ${guildID}
    GROUP BY t.level, t.xp, u.username, u.discriminator, t."avatarURL"
    ORDER BY t.level DESC, t.xp DESC
    LIMIT 50;`)
    const parsedLmao = JSON.parse(JSON.stringify(serverRank, (key, value) =>
  typeof value === 'bigint'
      ? value.toString()
      : value // return everything else unchanged
)) as Rankings[]
    return parsedLmao
}