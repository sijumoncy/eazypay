import React from "react";
import prisma from "@repo/db/client";
import { AddMoney } from "../AddMoneyCard";
import { BalanceCard } from "../BalanceCard";
import { OnRampTransactions } from "..//OnRampTransaction";
import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import Box from "@repo/ui/box";
import { ITransactionData, ITransactionDataArr, OnRampStatusTypeEnum } from "@repo/types/dbTypes";

async function getBalance() {
  const session = await getServerSession(authOptions);
  const balance = await prisma.balance.findFirst({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return {
    amount: balance?.amount || 0,
    locked: balance?.locked || 0,
  };
}

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
    orderBy : {"id" : "desc"},
    take : 5
  });
  return txns.map((t) => ({
    time: t.startTime,
    amount: t.amount,
    status: t.status as OnRampStatusTypeEnum,
    provider: t.provider,
  }));
}

async function Transfer() {
  const balance = await getBalance();
  const transactions:ITransactionDataArr = await getOnRampTransactions();

  return (
    <div className="pt-5 flex flex-col gap-5">
      <div className="w-full">
        <div className="grid grid-cols-1 gap-10 p-4">
          <Box>
            <AddMoney />
          </Box>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Box>
              <BalanceCard amount={balance.amount} locked={balance.locked} />
            </Box>
            <Box className="pt-4">
              <OnRampTransactions transactions={transactions} />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transfer;
