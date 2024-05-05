import {
  ITransactionData,
  ITransactionDataArr,
  OnRampStatusTypeEnum,
} from "@repo/types/dbTypes";
import { CardTransfer } from "@repo/ui/cardtransfer";

const TransactionStatusText = ({
  TransactionStatus,
}: {
  TransactionStatus: OnRampStatusTypeEnum;
}) => {
  return TransactionStatus === OnRampStatusTypeEnum.Success ? (
    <span className="bg-success">Done</span>
  ) : TransactionStatus === OnRampStatusTypeEnum.Processing ? (
    <span className="bg-warning">Processing</span>
  ) : (
    <span className="bg-danger">Failed</span>
  );
};

export const OnRampTransactions = ({
  transactions,
}: {
  transactions: ITransactionDataArr;
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
        {transactions.map((transaction) => (
          <div className="flex justify-between">
            <div>
              <div className="text-sm">Received INR</div>
              <div className="text-slate-600 text-xs flex gap-2">
                <span>{transaction.time.toDateString()}</span>
                <TransactionStatusText TransactionStatus={transaction.status} />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              + Rs {transaction.amount / 100}
            </div>
          </div>
        ))}
      </div>
    </CardTransfer>
  );
};
