import PageHead from "@repo/ui/pagehead";
import DashBoard from "../../../components/dashboard";

export default function () {
  return (
    <div className="w-full px-2 pt-10 overflow-y-scroll max-h-screen no-scrollbar">
      <PageHead text="Dashboard" />
      <DashBoard />
    </div>
  );
}
