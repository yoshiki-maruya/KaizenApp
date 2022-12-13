import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import IKaizen from '../../types/IKaizen';
import axios from "axios";

const prisma = new PrismaClient();

async function createKaizen (req: NextApiRequest, res: NextApiResponse) {
  const kaizenData = JSON.parse(req.body);

  const saveKaizen = await prisma.kaizen.create({
    data: kaizenData,
  })

  res.json(saveKaizen);
}

export default createKaizen;
