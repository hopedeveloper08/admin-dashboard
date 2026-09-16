import Notifications from "./TopbarNotification";
import Profile from "./TopbarProfile";
import SearchInput from "./TopbarSearchInput";
import ThemeSwap from "./TopbarThemeSwap";

import { HiOutlineMenu } from "react-icons/hi";

export default function Topbar() {
  return (
    <header
      className="
            navbar 
            bg-base-200
            justify-between
            gap-2
            shadow-sm
            z-20
        "
    >
      <div className="flex items-center gap-2">
        <label
          htmlFor="sidebar"
          aria-label="open sidebar"
          className="lg:hidden btn btn-square btn-ghost drawer-button"
        >
          <HiOutlineMenu className="size-6" />
        </label>
        <SearchInput />
      </div>
      <div className="flex items-center">
        <div className="flex gap-1 lg:gap-2">
          <ThemeSwap />
          <Notifications />
        </div>
        <div className="divider divider-horizontal max-lg:w-0"></div>
        <Profile />
      </div>
    </header>
  );
}
