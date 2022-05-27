// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from '../../../util/prisma'

export async function getData() {
  const userData = await prisma.guild.aggregate({
    _sum: {
      memberCount: true
    }
  })
  return { count: userData._sum.memberCount }
}