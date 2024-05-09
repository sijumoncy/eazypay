"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

export async function p2pTransfer(toUserNumber: string, amount: number) {
  const session = await getServerSession(authOptions);
  const fromUserId = session?.user?.id;
  if (!fromUserId) {
    throw new Error("Error while sending. Try again.");
  }
  // check the toUser is exist
  const toUser = await prisma.user.findFirst({
    where: {
      number: toUserNumber,
    },
  });

  if (!toUser) {
    throw new Error("User not found");
  }

  try {
    await prisma.$transaction(async (tx) => {
      // need to hanlde : block simultanoius parallel interaction with db
      // only allow one interaction. so wait other request trying access same row in db
      // raw sql because prisma not support lock out of the box
      // there are multi type lock => read write , write lock
      await tx.$queryRaw`SELECT * FROM "Balance" WHERE "userId" = ${Number(fromUserId)} FOR UPDATE`;

      const fromBalance = await tx.balance.findUnique({
        where: { userId: Number(fromUserId) },
      });
      if (!fromBalance || fromBalance.amount < amount) {
        throw new Error("Insufficient funds");
      }

      await tx.balance.update({
        where: { userId: Number(fromUserId) },
        data: { amount: { decrement: amount } },
      });

      await tx.balance.update({
        where: { userId: toUser.id },
        data: { amount: { increment: amount } },
      });

      await tx.p2pTransfer.create({
        data: {
          fromUserId: Number(fromUserId),
          toUserId: toUser.id,
          amount: amount,
          timestamp: new Date(),
        },
      });
    });
    return {
      message: "success",
    };
  } catch (err: any) {
    throw new Error(err?.message || err);
  }
}
