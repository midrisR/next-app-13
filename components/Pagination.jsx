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
    <div className="flex gap-6 items-center justify-center my-8">
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
              className="py-2 rounded-full text-sm font-semibold text-black"
            >
              {pageNumber}
            </span>
          ) : (
            <Link
              key={i}
              href={renderPageLink(pageNumber)}
              className={`${
                pageNumber === currentPage
                  ? "text-white bg-black"
                  : "text-black"
              } h-8 w-8 rounded flex items-center justify-center leading-8`}
            >
              {pageNumber ? pageNumber : null}
            </Link>
          );
        })}
      </NextPrev>
    </div>
  );
}
