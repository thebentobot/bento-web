// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { patreon } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../util/prisma'

export async function getData() {
  const patreonSponsorData = await prisma.patreon.findMany({
    where: {
      sponsor: true
    }
  })
  const parsedLmao = JSON.parse(JSON.stringify(patreonSponsorData, (key, value) =>
  typeof value === 'bigint'
      ? value.toString()
      : value // return everything else unchanged
)) as patreon[]
  return parsedLmao
}
