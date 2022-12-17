import { Prisma, PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function getKaizens() {
  try {
    const kaizenFromDB = await prisma.kaizen.findMany();
    return { kaizens: kaizenFromDB }
  } catch (error) {
    return { error }
  }
}
