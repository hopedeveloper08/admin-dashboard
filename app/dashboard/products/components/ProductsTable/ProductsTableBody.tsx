import type { Product } from "../../api/getAllProducts";
import ProductsTableButtons from "./ProductsTableButtons";

type ProductsTableBodyProps = {
  page: number;
  products: Array<Product>;
};

export default function ProductsTableBody({
  page,
  products,
}: ProductsTableBodyProps) {  
  return (
    <tbody className="*:hover:bg-base-300">
      {products.slice((page - 1) * 10, page * 10).map((item) => (
        <tr key={item.id}>
          <th>{item.id}</th>
          <td>{item.title}</td>
          <td>{item.category}</td>
          <td>
              <span className="text-sm lg:text-base">{item.price.toLocaleString()}$</span>
          </td>
          <td>
            <ProductsTableButtons id={item.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
