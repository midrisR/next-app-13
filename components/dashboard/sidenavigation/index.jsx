"use client";
import SidenavItems from "./items";
import SidenavHeader from "./header";
import { useState } from "react";
const style = {
  mobilePosition: {
    left: "left-0",
    right: "right-0",
  },
  close: `hidden`,
  container: `pb-32 lg:pb-12`,
  open: `absolute w-8/12 z-40 sm:w-5/12`,
  default: `bg-slate-800 h-screen overflow-y-auto top-0 lg:flex lg:relative lg:w-64 lg:z-auto`,
};

export default function SideNavigation({ mobilePosition, open }) {
  return (
    <aside
      className={`${style.default} ${style.mobilePosition[mobilePosition]} 
        ${open ? style.open : style.close} `}
    >
      <div className={style.container}>
        <SidenavHeader />
        <SidenavItems />
      </div>
    </aside>
  );
}
