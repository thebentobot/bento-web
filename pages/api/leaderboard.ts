// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { QueryTypes } from 'sequelize'
import database from '../../database/database'
import { initModels, user } from '../../database/models/init-models'

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
    const serverRank: Array<Rankings> = await database.query(`
    SELECT row_number() over (ORDER BY t.level DESC, t.xp DESC) as rank, t.level, t.xp, u.username, u.discriminator, t."avatarURL"
    FROM "guildMember" AS t
    INNER JOIN "user" u on u."userID" = t."userID"
    WHERE t."guildID" = :guild
    GROUP BY t.level, t.xp, u.username, u.discriminator, t."avatarURL"
    ORDER BY t.level DESC, t.xp DESC
    LIMIT 50;`, {type: QueryTypes.SELECT, replacements: {guild: guildID}})
    return serverRank
}