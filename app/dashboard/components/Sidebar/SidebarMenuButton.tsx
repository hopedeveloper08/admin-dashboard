import { GoSidebarExpand, GoSidebarCollapse } from "react-icons/go";

export default function SidebarMenuButton({ isOpen }: { isOpen: boolean }) {
  return (
    <label
      htmlFor="dashboard-drawer"
      aria-label="open sidebar"
      className="btn btn-square btn-ghost drawer-button"
    >
      {isOpen ? (
        <GoSidebarCollapse className="size-6 lg:size-7" />
      ) : (
        <GoSidebarExpand className="size-6 lg:size-7" />
      )}
    </label>
  );
}
