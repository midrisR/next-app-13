import Link from "next/link";
import usePagination from "@/hooks/usePagination";
import NextPrev from "./nextPrev";
export const dotts = "...";

export default function Pagination({
  totalItems,
  currentPage,
  itemsPerPage = 10,
  renderPageLink,
}) {
  const pages = usePagination(totalItems, currentPage, itemsPerPage);
  return (
    <div className="flex gap-x-4 md:gap-x-8 items-center justify-center my-8">
      <NextPrev
        urlPrev={renderPageLink(currentPage - 1)}
        urlNext={renderPageLink(currentPage + 1)}
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
      >
        {pages.map((pageNumber, i) => {
          return pageNumber === dotts ? (
            <span
              key={i}
              className="min-h-9.5 min-w-9.5 flex justify-center items-center py-2 px-3 text-sm rounded-lg focus:outline-hidden focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none"
              aria-current="page"
            >
              {pageNumber}
            </span>
          ) : (
            <Link
              key={i}
              href={renderPageLink(pageNumber)}
              className={`${
                pageNumber === currentPage
                  ? "text-gray-800 font-bold py-2 px-3 bg-gray-200 text-gray-800 "
                  : "text-gray-700"
              } min-h-9.5 min-w-9.5 flex justify-center items-center rounded-lg py-2 px-3 text-sm`}
            >
              {pageNumber ? pageNumber : null}
            </Link>
          );
        })}
      </NextPrev>
    </div>
  );
}
