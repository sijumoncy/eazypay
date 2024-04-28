import PageHead from "@repo/ui/pagehead";
import { SendMoney } from "../../../components/SendMoney";
export default function () {
  return (
    <div className="w-screen">
      <PageHead text="P2P Transfer" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <SendMoney />
      </div>
    </div>
  );
}
