import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function getSessionUserData() {
  const session = await getServerSession(authOptions);
  const userId = session?.user?.id;

  if (!userId) {
    throw new Error("Error while sending. Try again.");
  }
  // check the toUser is exist
  const userData = await prisma.user.findFirst({
    where: {
      id: Number(userId),
    },
    select : {
        Balance : true,
        id : true,
        name : true,
        sentTransfers : true,
        receivedTransfers : true
    }
  });

  // modify the amount data / 1000 to actual amount 
  if (userData && userData.Balance) {
    // Modify the amount value in the Balance array
    userData.Balance = userData.Balance.map(balance => {
      return {
        ...balance,
        amount: balance.amount / 1000
      };
    });
  }

  return userData
}
