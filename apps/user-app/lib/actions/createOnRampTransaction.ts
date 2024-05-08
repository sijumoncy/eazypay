"use server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth";
import prisma from "@repo/db/client";

/**
 * server action create an init entry for trasfer start in db
 * @param amount
 * @param provider
 */
export async function createOnRampTransaction(
  amount: number,
  provider: string
): Promise<
  | {
      message: string;
      userId?: number;
      amount?: number;
      token?: string;
    }
  | undefined
> {
  //get requested user
  const session = await getServerSession(authOptions);
  const userId = session.user.id;

  //before redirect to bank webhook. get a token from the bank webhook endpoint and use it in the redirection
  // so bank can understood who is requesting.
  //dummy token as of now
  const token = (Math.random() * 1000).toString();

  if (!userId) {
    return {
      message: "user not logged in",
    };
  }

  try {
    await prisma.onRampTransaction.create({
      data: {
        userId: Number(userId),
        amount: amount * 100,
        status: "Processing",
        startTime: new Date(),
        provider: provider,
        token: token,
      },
    });

    console.log("created then ==============");

    return {
      message: "payment process initiated",
      userId: userId,
      amount: amount * 100,
      token: token,
    };
  } catch (err) {
    return {
      message: `error : ${err}`,
    };
  }
}
