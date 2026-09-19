"use client";

import { useEffect, useState } from "react";

import { BsFilePlus } from "react-icons/bs";

import ProductsTable from "./components/ProductsTable/ProductsTable";
import SectionTitle from "../components/common/SectionTitle";
import Pagination from "../components/Pagination/Pagination";

export default function ProductsPage() {
  const [page, setPage] = useState(1)
  const maxPage = Math.floor(35 / 10) + 1

  return (
    <>
      <SectionTitle
        title={"لیست محصولات"}
        buttons={
          <button className="btn btn-primary">
            <BsFilePlus />
            <span>ایجاد محصول</span>
          </button>
        }
      />
      <ProductsTable page={page} />
      <Pagination page={page} setPage={setPage} maxPage={maxPage} />
    </>
  );
}
