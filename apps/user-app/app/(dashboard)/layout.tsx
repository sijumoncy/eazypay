import SideNavBar from "../../components/sideNavBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex h-[calc(100vh_-_65px)] overflow-y-auto">
      <SideNavBar/>
      {children}
    </div>
  );
}
