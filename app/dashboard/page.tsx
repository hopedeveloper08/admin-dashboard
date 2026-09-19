"use client";

import Link from "next/link";
import SectionTitle from "./components/common/SectionTitle";
import Summaries from "./components/Summaries/Summaries";
import DetailsChart from "./components/DetailsChart/DetailsChart";

import summaryGenerator, { Summary } from "@/lib/dashboard/summeryGenerator";

export default function DashboardPage() {
  const summaries: Array<Summary> = summaryGenerator(12, 36, 4, 9);

  return (
    <>
      <SectionTitle
        title={"داشبورد"}
        buttons={
          <Link className="btn btn-primary" href={"/dashboard/products"}>
            ایجاد محصول
          </Link>
        }
      />

      <Summaries summaries={summaries} />

      <DetailsChart summaries={summaries} />
    </>
  );
}
