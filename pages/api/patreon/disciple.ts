// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import database from '../../../database/database'
import { initModels, patreon } from '../../../database/models/init-models'
import { guild } from '../../../database/models/guild';

export async function getData() {
  initModels(database)
  const patreonDiscipleData = await patreon.findAll({raw: true, where: {disciple: true}});
  return patreonDiscipleData
}