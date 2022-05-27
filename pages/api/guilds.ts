// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../util/prisma'

export async function getData() {
  const guildData = await prisma.guild.findMany({
    orderBy: {
      memberCount: 'desc'
    },
    take: 50
  })
  return guildData
}