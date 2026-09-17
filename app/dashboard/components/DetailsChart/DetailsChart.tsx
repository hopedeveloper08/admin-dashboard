import { Summary } from "@/lib/dashboard/summeryGenerator";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

export default function DetailsChart({
  summaries,
}: {
  summaries: Array<Summary>;
}) {
  return (
    <div className="card shadow-xl bg-base-300 p-4 lg:p-6">
      <div className="card-title">آمار کلی داشبورد</div>

      <div className="my-2 container">
        <BarChart
          className="w-full lg:w-[70%] h-[35vh] lg:h-[50vh] mx-auto"
          responsive
          data={summaries.map((summary) => ({
            title: summary.title,
            count: summary.count,
          }))}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <XAxis dataKey="title" fill="#0f172a" />
          <YAxis dataKey="count" width="auto" />
          <Tooltip
            content={({ payload, label }) => (
              <span className="badge badge-primary py-4 text-sm lg:text-base">
                تعداد {label}: {payload[0]?.payload.count}
              </span>
            )}
          />
          <Bar dataKey="count" radius={[10, 10, 0, 0]} fill="#00bfa6" barSize={70} />
        </BarChart>
      </div>
    </div>
  );
}
