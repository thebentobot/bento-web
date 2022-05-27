// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { patreon } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../util/prisma'

export async function getData() {
  const patreonSupporterData = await prisma.patreon.findMany({
    where: {
      supporter: true
    }
  })
  const parsedLmao = JSON.parse(JSON.stringify(patreonSupporterData, (key, value) =>
  typeof value === 'bigint'
      ? value.toString()
      : value // return everything else unchanged
)) as patreon[]
  return parsedLmao
}
