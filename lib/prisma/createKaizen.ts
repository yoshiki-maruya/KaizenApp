import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function createKaizen(kaizen: Prisma.KaizenCreateInput) {
  try {
    const kaizenFromDB = await prisma.kaizen.create({ data: kaizen })
    return { kaizen: kaizenFromDB }
  } catch (error) {
    return { error }
  }
}
