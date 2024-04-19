import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { hash } from "@repo/utils/hashUtils";

async function seed() {
  const alice = await prisma.user.upsert({
    where: { number: "1111111111" },
    update: {},
    create: {
      number: "1111111111",
      password: await hash("alice"),
      name: "alice",
      Balance:{
        create:{
          amount : 2000, // 20 ruppers 2000 / 20 => if 20.20 => 20.20 * 100 = 2020
          locked : 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Success",
          amount: 20000,
          token: "122",
          provider: "HDFC Bank",
        },
      },
    },
  });
  const bob = await prisma.user.upsert({
    where: { number: "2222222222" },
    update: {},
    create: {
      number: "2222222222",
      password: await hash("bob"),
      name: "bob",
      Balance:{
        create:{
          amount : 2000, // 20 ruppers 2000 / 20 => if 20.20 => 20.20 * 100 = 2020
          locked : 0
        }
      },
      OnRampTransaction: {
        create: {
          startTime: new Date(),
          status: "Failure",
          amount: 2000,
          token: "123",
          provider: "HDFC Bank",
        },
      },
    },
  });
  console.log({ alice, bob });
}
seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
