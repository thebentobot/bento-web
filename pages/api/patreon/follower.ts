// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../../database/database'
import { initModels, patreon } from '../../../database/models/init-models'
import { guild } from '../../../database/models/guild';

export async function getData() {
  initModels(database)
  const patreonFollowerData = await patreon.findAll({raw: true, where: {follower: true}});
  return patreonFollowerData
}
/*
export default async function handler(req: NextApiRequest, res: NextApiResponse){
  res.status(200).json(await getData())
}
*/