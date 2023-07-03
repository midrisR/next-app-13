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
                ? "text-white bg-purple-500"
                : "text-black"
            } px-4 py-2 mx-1 rounded text-sm font-semibold no-underline`}
          >
            {pageNumber}
          </Link>
        );
      })}
    </div>
  );
}
