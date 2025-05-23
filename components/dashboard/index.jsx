"use client";
import { useState } from "react";
import TopNavigation from "./topnavigation";
import SideNavigation from "./sidenavigation";
import Overlay from "./overlay";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [resize, setResize] = useState(true);

  return (
    <div className="h-screen overflow-hidden relative">
      <div className="flex items-start">
        <Overlay open={open} onClick={() => setOpen((prev) => !prev)} />
        <SideNavigation
          mobilePosition="right"
          open={open}
          setOpen={setOpen}
          resize={resize}
        />
        <div className="bg-slate-800 flex flex-col h-screen pl-0 w-full">
          <TopNavigation
            onClick={() => setOpen((prev) => !prev)}
            changeSize={() => setResize((prev) => !prev)}
          />
          <main className="bg-indigo-100 h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tl-xl">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
