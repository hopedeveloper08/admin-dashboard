"use client";

import Link from "next/link";
import menu from "../../menu";
import SidebarMenuButton from "./SidebarMenuButton";
import { usePathname } from "next/navigation";

export default function SidebarMenu() {
  const pathname = usePathname();

  return (
    <ul className="menu w-full grow">
      <li className="hidden is-drawer-open:hidden lg:block mb-5 *:size-full">
        <SidebarMenuButton isOpen={false} />
      </li>
      {menu.map((nav) => {        
        const isActive = nav.link === pathname;

        return (
          <li key={nav.id} className={`${isActive && "border-r-2 border-secondary"}`}>
            <Link
              href={nav.link}
              className="is-drawer-close:tooltip is-drawer-close:tooltip-left tooltip-secondary"
              data-tip={nav.title}
            >
              <nav.icon
                className={`my-2 inline-block size-5 lg:size-6 ${isActive && "text-secondary"}`}
              />
              <span className={`is-drawer-close:hidden lg:text-base ${isActive && "text-secondary font-semibold"}`}>
                {nav.title}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
