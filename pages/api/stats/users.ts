// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../../database/database'
import { initModels, user } from '../../../database/models/init-models'

type Data = {
  count: number
}

export async function getData() {
  initModels(database)
  const userData = await user.findAndCountAll();
  return { count: userData.count }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    const jsonData = await getData()
    
    res.status(200).json(jsonData)
}