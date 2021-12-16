// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../../database/database'
import { guild, initModels, user } from '../../../database/models/init-models'

export async function getData() {
  initModels(database)
  const userData = await guild.sum('memberCount')
  return { count: userData }
}