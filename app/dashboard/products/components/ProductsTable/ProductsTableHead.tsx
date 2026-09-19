import { HOME_PAGE_PRODUCTS_LIST_TABLE_HEADER } from "@/lib/constants";

export default function ProductsTableHead() {
  return (
    <thead className="bg-base-300">
      <tr>
        {HOME_PAGE_PRODUCTS_LIST_TABLE_HEADER.map((item) => (
          <th key={item}>{item}</th>
        ))}
      </tr>
    </thead>
  );
}
