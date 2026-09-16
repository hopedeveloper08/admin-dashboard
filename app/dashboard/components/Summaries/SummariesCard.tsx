import Link from "next/link";

import { Summary } from "@/lib/dashboard/summeryGenerator";

export default function SummariesCard({ title, count, Icon, link }: Summary) {
  return (
    <div className="card bg-base-300 shadow-xl">
      <div className="card-body gap-y-4">
        <div className="flex justify-between items-center gap-2 lg:gap-4">
          <h3 className="card-title text-md lg:text-xl">{title}</h3>
          <Link className="btn btn-outline border-accent p-3" href={link}>
            <Icon className="size-4 lg:size-5 text-accent" />
          </Link>
        </div>
        <div className="flex items-end gap-1 lg:gap-2">
          <span className="card-title text-3xl lg:text-2xl">{count}</span>
          <span className="lg:text-base">عدد</span>
        </div>
      </div>
    </div>
  );
}
