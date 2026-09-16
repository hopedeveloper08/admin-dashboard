"use client";

import Link from "next/link";
import SectionTitle from "./components/common/SectionTitle";
import Summaries from "./components/Summaries/Summaries";

export default function DashboardPage() {
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
      <div className="mt-6">
        <Summaries />
      </div>
    </>
  );
}
