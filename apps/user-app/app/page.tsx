import { Button } from "@repo/ui/button";
import BalanceComponent from "../components/balanceComponent";

export default function Page(): JSX.Element {
  return (
    <main className="">
      <div className="text-red-500 text-2xl">Hii From User App</div>
      <Button className="hover:bg-green-500">UserAppButton</Button>
      <BalanceComponent/>
    </main>
  );
}
