import Image from "next/image";
import Link from "next/link";

import { LOGO_URL } from "@/lib/constants";
import TopbarMenuButton from "./SidebarMenuButton";

export default function SidebarHeader() {
  return (
    <div className="w-full is-drawer-close:hidden flex justify-between items-center">
      <Link href={"/dashboard"} className="flex items-center gap-3">
        <Image
          className="size-10"
          src={LOGO_URL}
          alt="logo"
          width={40}
          height={40}
        />
        <span className="md:text-lg font-black">داشبورد مدیریت</span>
      </Link>
      <TopbarMenuButton isOpen />
    </div>
  );
}
