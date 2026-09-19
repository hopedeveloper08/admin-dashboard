import Link from "next/link";

import { BsEye, BsTrash3, BsPencilSquare } from "react-icons/bs";

type ProductsTableButtons = {
  id: number;
};

export default function ProductsTableButtons({ id }: ProductsTableButtons) {
  return (
    <div className="flex lg:gap-2 justify-center">
      <Link href={`#${id}`} className="btn btn-square btn-ghost btn-primary">
        <BsEye className="size-4 lg:size-6" />
      </Link>
      <button className="btn btn-square btn-ghost btn-warning">
        <BsPencilSquare className="size-4 lg:size-6" />
      </button>
      <button className="btn btn-square btn-ghost btn-error">
        <BsTrash3 className="size-4 lg:size-6" />
      </button>
    </div>
  );
}
