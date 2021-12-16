// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../database/database'
import { initModels } from '../../database/models/init-models'
import { guild } from '../../database/models/guild'

export async function getData(guildID: string) {
  initModels(database)
  const guildData = await guild.findOne({raw: true, where: {guildID: guildID}})
  return guildData
}