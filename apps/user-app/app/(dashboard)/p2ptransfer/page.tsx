import PageHead from "@repo/ui/pagehead";
import P2PSend from "../../../components/p2p/p2pSend";
export default function () {
  return (
    <div className="w-full px-2 pt-10 overflow-y-scroll h-[98%] no-scrollbar">
      <PageHead text="P2P Transfer" />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 ">
        <P2PSend/>
      </div>
    </div>
  );
}
