import PageHead from "@repo/ui/pagehead";
import DashBoard from "../../../components/dashboard";

export default function () {
  return (
    <div className="border w-full px-2 pt-10">
      <PageHead text="Dashboard" />
      <DashBoard />
    </div>
  );
}
