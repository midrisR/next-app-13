import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import data from "./menu";

const style = {
  inactive: `text-gray-400`,
  active: `font-medium text-white`,
  link: `flex items-center justify-start my-2 p-4 text-sm w-full hover:text-white`,
};

export default function SidenavItems() {
  const path = usePathname();
  return (
    <ul className="md:pl-6">
      <li>
        {data.map((item) => (
          <Link
            href={item.link}
            key={item.title}
            className={`${style.link} 
               ${item.link === path ? style.active : style.inactive}`}
          >
            <span>{item.icon}</span>
            <span className="mx-4">{item.title}</span>
          </Link>
        ))}
      </li>
    </ul>
  );
}
