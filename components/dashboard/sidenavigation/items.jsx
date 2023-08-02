import Link from "next/link";
import { useEffect, useRef } from "react";
import data from "./menu";
import { usePathname, useSearchParams } from "next/navigation";

export default function SidenavItems({ resize, setOpen }) {
  const path = usePathname();
  const searchParams = useSearchParams();
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current !== path) {
      ref.current = path;
      setOpen(false);
    }
  }, [path, searchParams]);
  return (
    <ul className="flex justify-center">
      <li>
        {data.map((item) => (
          <Link
            ref={ref}
            href={item.link}
            key={item.title}
            className={`${
              resize
                ? "flex flex-col justify-center items-center"
                : "flex items-center justify-start"
            } my-2 py-4 text-sm w-full hover:text-white ${
              item.link === path ? "font-medium text-white" : "text-gray-400"
            }`}
          >
            {item.icon}
            <span className="mt-1 mx-4">{item.title}</span>
          </Link>
        ))}
      </li>
    </ul>
  );
}
