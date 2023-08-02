"use client";
import SidenavItems from "./items";
import SidenavHeader from "./header";

const style = {
  mobilePosition: {
    left: "left-0",
    right: "right-0",
  },
  close: `hidden`,
  container: `pb-32 lg:pb-12 w-full`,
  open: `absolute w-8/12 z-40 sm:w-5/12`,
};

export default function SideNavigation({
  mobilePosition,
  open,
  setOpen,
  resize,
}) {
  return (
    <aside
      className={`bg-slate-800 h-screen overflow-y-auto top-0 lg:flex lg:relative ${
        resize ? "lg:w-32" : "lg:w-64"
      }  lg:z-auto duration-300 ease-in transition-all ${
        style.mobilePosition[mobilePosition]
      } 
        ${open ? style.open : style.close} `}
    >
      <div className={style.container}>
        <SidenavHeader />
        <SidenavItems resize={resize} setOpen={setOpen} />
      </div>
    </aside>
  );
}
