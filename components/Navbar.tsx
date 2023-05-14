import Link from "next/link";

export default function Navbar() {
  return (
    <div className="pl-7 fixed top-0">
      <div className="grid grid-cols-1 gap-6 h-screen">
        <h1 className="text-2xl font-bold my-auto">Smartgram</h1>
        <div className="grid-cols-1 grid gap-3">
          <Link href="/dashboardHome/home">Home</Link>
          <Link href="/dashboardHome/home">Search</Link>
          <Link href="/dashboardHome/home">Explore</Link>
          <Link href="/dashboardHome/home">Reels</Link>
          <Link href="/dashboardHome/home">Messages</Link>
          <Link href="/dashboardHome/home">Notifications</Link>
          <Link href="/dashboardHome/home">Create</Link>
          <Link href="/dashboardHome/home">Profile</Link>
        </div>
        <p className="my-auto">Menu</p>
      </div>
    </div>
  );
}
