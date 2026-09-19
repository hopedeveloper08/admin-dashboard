import ProductsTableButtons from "./ProductsTableButtons";

type ProductsTableBodyProps = {
  page: number;
};

export default function ProductsTableBody({ page }: ProductsTableBodyProps) {
  return (
    <tbody className="*:hover:bg-base-300">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
        11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
      ]
        .slice((page - 1) * 10, page * 10)
        .map((item) => (
          <tr key={item}>
            <th>{item}</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>
              <div className="flex max-lg:flex-col lg:gap-1 max-lg:justify-center items-center">
                <span className="text-sm lg:text-base">10,000,000</span>
                <span className="text-xs">تومان</span>
              </div>
            </td>
            <td>
              <ProductsTableButtons id={item} />
            </td>
          </tr>
        ))}
    </tbody>
  );
}
