import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <div className="drawer w-fit lg:drawer-open z-20">
      <input
        id="dashboard-drawer"
        type="checkbox"
        className="drawer-toggle inline"
      />

      <aside className="drawer-side is-drawer-close:overflow-visible z-20">
        <label
          htmlFor="dashboard-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="
        flex min-h-full flex-col items-start 
        bg-base-200 
        is-drawer-close:w-18 is-drawer-open:w-70  
        is-drawer-close:px-2 is-drawer-close:pt-3 
        is-drawer-open:p-4 is-drawer-open:lg:p-6

        ">
          <SidebarHeader />
          <div className="divider h-0 is-drawer-close:hidden"></div>
          <SidebarMenu />
        </div>
      </aside>
    </div>
  );
}
