import { Dispatch, SetStateAction } from "react";

type PaginationProps = {
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  maxPage: number;
};
export default function Pagination({ page, setPage, maxPage }: PaginationProps) {
  return (
    <div className="join flex justify-center">
      {page > 1 && <button className="join-item btn" onClick={() => setPage(prev => prev - 1)}>قبلی</button>}
      <button className="join-item btn btn-active">{page}</button>
      {page < maxPage  && <button className="join-item btn" onClick={() => setPage(prev => prev + 1)}>بعدی</button>}
    </div>
  );
}
