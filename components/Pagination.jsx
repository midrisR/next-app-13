import Link from "next/link";
import usePagination from "@/hooks/usePagination";

export const dotts = "...";

export default function Pagination({
  totalItems,
  currentPage,
  itemsPerPage = 10,
  renderPageLink,
}) {
  const pages = usePagination(totalItems, currentPage, itemsPerPage);
  return (
    <div className="flex items-center justify-center my-8">
      {pages.map((pageNumber, i) => {
        return pageNumber === dotts ? (
          <span
            key={i}
            className="px-4 py-2 rounded-full text-sm font-semibold text-black"
          >
            {pageNumber}
          </span>
        ) : (
          <Link
            key={i}
            href={renderPageLink(pageNumber)}
            className={`${
              pageNumber === currentPage
                ? "text-blue-700 bg-blue-500 bg-opacity-30"
                : "text-slate-700"
            } px-4 py-2 mx-1 rounded text-sm font-semibold no-warp`}
          >
            {pageNumber ? pageNumber : null}
          </Link>
        );
      })}
    </div>
  );
}
