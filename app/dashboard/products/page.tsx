"use client";

import { useEffect, useState } from "react";

import { BsFilePlus, BsXOctagon } from "react-icons/bs";

import ProductsTable from "./components/ProductsTable/ProductsTable";
import SectionTitle from "../components/common/SectionTitle";
import Pagination from "../components/Pagination/Pagination";
import getAllProducts from "./api/getAllProducts";

export default function ProductsPage() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getAllProductsHandler() {
      setLoading(true);
      try {
        const data = await getAllProducts();
        setProducts(data);
      } catch {
        setError(
          "اشکالی وجود دارد، محصولات یافت نشدند. به پشتیبان خود اطلاع دهید.",
        );
      } finally {
        setLoading(false);
      }
    }

    getAllProductsHandler();
  }, []);

  if (    loading)
    return (
      <span className="loading loading-bars loading-xl mt-20 mx-auto"></span>
    );

  if (error)
    return (
      <div role="alert" className="alert alert-error">
        <BsXOctagon />
        <span className="text-xl">{error}</span>
      </div>
    );

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
      <ProductsTable page={page} products={products} />
      <Pagination
        page={page}
        setPage={setPage}
        maxPage={Math.ceil(products.length / 10)}
      />
    </>
  );
}
