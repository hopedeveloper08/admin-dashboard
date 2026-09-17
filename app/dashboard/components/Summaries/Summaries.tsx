import { Summary } from "@/lib/dashboard/summeryGenerator";
import SummariesCard from "./SummariesCard";

export default function Summaries({
  summaries,
}: {
  summaries: Array<Summary>;
}) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-5">
      {summaries.map((item: Summary) => (
        <SummariesCard
          key={item.id}
          id={item.id}
          title={item.title}
          count={item.count}
          Icon={item.Icon}
          link={item.link}
        />
      ))}
    </div>
  );
}
