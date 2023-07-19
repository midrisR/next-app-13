"use client";
import { useState } from "react";
import TopNavigation from "./topnavigation";
import SideNavigation from "./sidenavigation";
import Overlay from "./overlay";
import { GlobalProvider } from "@/hooks/useContext";
const style = {
  container: `h-screen overflow-hidden relative`,
  mainContainer: `bg-[#25074d] flex flex-col h-screen pl-0 w-full lg:w-[calc(100%-16rem)]`,
  main: `bg-slate-200 h-screen overflow-auto pb-36 pt-4 px-2 md:pb-8 md:px-4 lg:px-6 lg:rounded-tl-3xl`,
};

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <GlobalProvider>
      <div className={style.container}>
        <div className="flex items-start">
          <Overlay open={open} onClick={() => setOpen((prev) => !prev)} />
          <SideNavigation mobilePosition="right" open={open} />
          <div className={style.mainContainer}>
            <TopNavigation onClick={() => setOpen((prev) => !prev)} />
            <main className={style.main}>{children}</main>
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
}
