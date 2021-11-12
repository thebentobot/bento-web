// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../database/database'
import { initModels } from '../../database/models/init-models'
import { guild } from '../../database/models/guild'

export async function getData() {
  initModels(database)
  const guildData = await guild.findAll({raw: true, limit: 50, order: [['memberCount', 'DESC']]})
  return guildData
}