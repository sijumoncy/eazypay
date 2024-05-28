interface ICreditCardProps {
  balance: number;
  accHolder: string;
  className?: string;
  joinedOn: string;
}

function CreditCard({
  balance,
  accHolder,
  joinedOn,
  className,
}: ICreditCardProps) {
  return (
    <div
      className=" relative overflow-hidden aspect-[4/2.4] w-full max-w-[450px] rounded-2xl px-8 py-6 bg-red-400 text-white shadow-xl flex flex-col justify-end gap-6
    bg-gradient-to-r from-blue-500 to-blue-200/40
      "
    >
      {/* Visa logo */}
      <div className="logo absolute top-5 right-6 mob:top-8  flex justify-items-center items-center">
        <h3 className="font-semibold text-basem mob:text-xl">
          eazyPay
        </h3>
      </div>

      {/* PIN */}
      <div className="absolute top-5 left-7 w-9 h-6 mob:h-8 mob:top-8 mob:w-11 mob:h-7 rounded bg-yellow-100">
        &nbsp;
      </div>

      {/* Card number */}
      <div className="absolute top-1/2 -translate-y-2 whitespace-nowrap text-lg mob:text-2xl font-semibold">
        4242&nbsp;4242&nbsp;4242&nbsp;4242
      </div>

      {/* Card infos */}
      <div className="absolute bottom-3 flex gap-6 mob:gap-8">
        <div className="flex flex-col w-max">
          <span className="text-[9px] mob:text-xs uppercase">Card holder</span>
          <span className="whitespace-nowrap text-sm mob:text-lg">
            {accHolder}
          </span>
        </div>
        <div className=" flex flex-col w-max">
          <span className="text-[9px] mob:text-xs uppercase">Joined On</span>
          <span className="whitespace-nowrap text-sm mob:text-lg">
            {joinedOn}
          </span>
        </div>
        <div className=" flex flex-col w-max">
          <span className="text-[9px] mob:text-xs uppercase">Balance</span>
          <span className="whitespace-nowrap text-sm mob:text-lg">{`₹ ${balance}`}</span>
        </div>
      </div>
    </div>
  );
}

export default CreditCard;
