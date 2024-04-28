import SideNavBar from "../../components/sideNavBar";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="flex">
      <SideNavBar/>
      {children}
    </div>
  );
}
