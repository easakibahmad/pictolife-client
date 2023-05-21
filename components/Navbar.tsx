"use client";
import Link from "next/link";
import { useState } from "react";
import Modal from "./Modal";

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="pl-7 fixed top-0">
      <div className="grid grid-cols-1 gap-6 h-screen">
        <h1 className="text-2xl font-bold my-auto">Pictolife</h1>
        <div className="grid-cols-1 grid gap-3">
          <Link href="/dashboardHome/home">Home</Link>
          <Link href="/dashboardHome/home">Search</Link>
          <Link href="/dashboardHome/home">Explore</Link>
          <Link href="/dashboardHome/home">Reels</Link>
          <Link href="/dashboardHome/home">Messages</Link>
          <Link href="/dashboardHome/home">Notifications</Link>
          <p onClick={() => setIsModalOpen(true)}>Create</p>
          {isModalOpen && <Modal onClose={handleCloseModal} />}

          <Link href="/dashboardHome/home">Profile</Link>
        </div>
        <p className="my-auto">Menu</p>
      </div>
    </div>
  );
}
