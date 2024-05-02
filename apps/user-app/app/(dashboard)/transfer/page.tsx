import PageHead from "@repo/ui/pagehead";
import Transfer from "../../../components/transfer";


export default async function () {

  return (
    <div className="w-full px-2 pt-10 overflow-y-scroll h-[98%] no-scrollbar">
      <PageHead text="Transfer" />
      <Transfer/>
    </div>
  );
}
