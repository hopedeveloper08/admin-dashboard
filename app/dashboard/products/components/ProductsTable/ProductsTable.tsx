import type { Product } from "../../api/getAllProducts";
import ProductsTableBody from "./ProductsTableBody";
import ProductsTableHead from "./ProductsTableHead";

type ProductsTableProps = {
  page: number;
  products: Array<Product>;
};

export default function ProductsTable({ page, products }: ProductsTableProps) {
  return (
    <div className="rounded-box border border-base-content/20 overflow-auto shadow-xl">
      <table className="table table-zebra">
        <ProductsTableHead />
        <ProductsTableBody page={page} products={products} />
      </table>
    </div>
  );
}
