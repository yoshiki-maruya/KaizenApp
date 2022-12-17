import { createKaizen } from '../../../lib/prisma/createKaizen';
import { getKaizens } from '../../../lib/prisma/getKaizens';
import { NextApiRequest, NextApiResponse } from "next";
import IKaizen from '../../../types/IKaizen'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    try {
      const data = req.body
      const { kaizen, error } = await createKaizen(data)
      // if (error) throw new Error(error)
      return res.status(200).json({ kaizen })
    } catch (error) {
      return console.log("error", error);
    }
  }

  if (req.method === 'GET') {
    try {
      const { kaizens, error } = await getKaizens()
      // if (error) throw new Error(error)
      return res.status(200).json({ kaizens })
    } catch (error) {
      return console.log("error", error);
    }
  }

  res.setHeader('Allow', ['GET', 'POST'])
  res.status(425).end(`Method ${req.method} is not allowed.`)
}

export default handler
