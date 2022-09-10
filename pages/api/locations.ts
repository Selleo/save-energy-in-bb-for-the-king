// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { Location } from './location.type'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Location[]>
) {
  res.status(200).json(
    [
      new Location(),
      new Location(),
      new Location(),
    ]
  )
}
