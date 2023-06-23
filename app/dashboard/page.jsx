"use client";
import { useState } from "react";
import SideMenu from "@/components/dashboard/sideMenu";
import Header from "@/components/dashboard/header";
export default function Dashboard() {
  const [width, setWidth] = useState(16);
  return (
    <div className="">
      <main className="flex items-start">
        <SideMenu width={width} />
        <div className="flex flex-col h-screen pl-0 w-full lg:pl-24 lg:space-y-4">
          <Header onClick={() => setWidth(64)} />
        </div>
      </main>
    </div>
  );
}
