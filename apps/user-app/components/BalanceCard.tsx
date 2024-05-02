import { CardTransfer } from "@repo/ui/cardtransfer";
import { Texts } from "@repo/ui/texts";

export const BalanceCard = ({
  amount,
  locked,
}: {
  amount: number;
  locked: number;
}) => {
  return (
    <CardTransfer title={"Balance"}>
      <div className="flex justify-between  py-2">
        <Texts variant={"label"}>Unlocked balance</Texts>
        <div>{amount / 100} INR</div>
      </div>
      <div className="flex justify-between  py-2">
        <Texts variant={"label"}>Total Locked Balance</Texts>
        <div>{locked / 100} INR</div>
      </div>
      <div className="flex justify-between  py-2">
        <Texts variant={"label"} colors={"linkColor"}>Total Balance</Texts>
        <div className="text-primary">{(locked + amount) / 100} INR</div>
      </div>
    </CardTransfer>
  );
};
