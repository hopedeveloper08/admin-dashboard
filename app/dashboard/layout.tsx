import { ReactNode } from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex">
      <Sidebar />
      <section className="grow *:px-6">
        <Topbar />
        <div className="mt-6 container mx-auto">
          <div className="relative z-10">{children}</div>
        </div>
      </section>
    </main>
  );
}
