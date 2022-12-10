import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const createKaizen = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(console.log("hello"));
}

export default createKaizen;
