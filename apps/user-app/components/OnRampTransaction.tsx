import { ITransactionData } from "@repo/types/dbTypes";
import { CardTransfer } from "@repo/ui/cardtransfer";

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: ITransactionData[];
}) => {
  if (!transactions.length) {
    return (
      <CardTransfer title="Recent Transactions">
        <div className="text-center pb-8 pt-8">No Recent transactions</div>
      </CardTransfer>
    );
  }
  return (
    <CardTransfer title="Recent Transactions">
      <div className="pt-2">
        {transactions.map((t) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs">
                {t.time.toDateString()}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              + Rs {t.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </CardTransfer>
  );
};
