import { cn } from "@repo/utils/cn";

interface ICreditCardProps {
  balance: number;
  accHolder: string;
  className?: string;
}

function CreditCard({ balance, accHolder, className }: ICreditCardProps) {
  return (
    <div className={cn(className, "aspect-[4/2.2] rounded-lg p-4")}>
      <p>{`$ ${balance}`}</p>
      <p>Wallet Balance</p>
      <p>{accHolder}</p>
    </div>
  );
}

export default CreditCard;
