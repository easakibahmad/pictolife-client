import Navbar from "../../components/Navbar";
import "../globals.css";

export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-11 w-full bg-white">
      <div className="col-span-2">
        <Navbar></Navbar>
      </div>
      <div className="border-l pl-2 col-span-9">{children}</div>
    </div>
  );
}
