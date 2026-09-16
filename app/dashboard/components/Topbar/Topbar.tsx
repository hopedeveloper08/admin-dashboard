import SidebarMenuButton from "../Sidebar/SidebarMenuButton";
import Notifications from "./TopbarNotification";
import Profile from "./TopbarProfile";
import SearchInput from "./TopbarSearchInput";
import ThemeSwap from "./TopbarThemeSwap";

export default function Topbar() {
  return (
    <header
      className="
            navbar 
            bg-base-200
            justify-between
            gap-2
            shadow-sm
            z-10
        "
    >
      <div className="flex items-center gap-2">
        <div className="lg:hidden">
          <SidebarMenuButton isOpen={false} />
        </div>
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
