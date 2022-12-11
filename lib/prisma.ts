import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const allKaizen = await prisma.kaizen.findMany();
  console.log(allKaizen);
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
