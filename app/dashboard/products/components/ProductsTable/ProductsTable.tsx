import ProductsTableBody from "./ProductsTableBody";
import ProductsTableHead from "./ProductsTableHead";

type ProductsTableProps = {
  page: number;
};

export default function ProductsTable({ page }: ProductsTableProps) {
  return (
    <div className="rounded-box border border-base-content/20 overflow-auto shadow-xl">
      <table className="table table-zebra">
        <ProductsTableHead />
        <ProductsTableBody page={page} />
      </table>
    </div>
  );
}
