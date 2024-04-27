import SideNavBar from "../../components/sideNavBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex ">
      {/* <div className="w-72 border-r border-slate-300 min-h-screen mr-4 pt-28">
        <div>
          <SidebarItem
            href={"/dashboard"}
            icon={<HomeIcon classes="w-5 h-5 " />}
            title="Home"
          />
          <SidebarItem
            href={"/transfer"}
            icon={<ClockIcon classes="w-5 h-5 " />}
            title="Transfer"
          />
          <SidebarItem
            href={"/transactions"}
            icon={
              <TransferArrowIcon classes="w-5 h-5" />
            }
            title="Transactions"
          />
          <SidebarItem
            href={"/p2ptransfer"}
            icon={
              <ShareMoneyIcon classes="w-5 h-5" />
            }
            title="P2P Payment"
          />
        </div>
      </div> */}
      <SideNavBar/>
      {children}
    </div>
  );
}
