"use client";
import usePagination from "@/hooks/usePagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
  const lastPage = Math.ceil(totalItems / itemsPerPage);
  const pages = usePagination(totalItems, currentPage, itemsPerPage);

  return (
    <div>
      <ul className="flex gap-4 py-4 justify-center bg-white">
        {currentPage > 1 && (
          <button
            onClick={() => onPageChange(currentPage - 1)}
            className="flex h-8 w-8 rounded items-center justify-center leading-8 text-black"
          >
            <FaChevronLeft color="black" />
          </button>
        )}
        {pages.map((page) => (
          <li
            key={page}
            className={`h-8 w-8 rounded flex items-center justify-center leading-8 cursor-pointer ${page === currentPage ? "text-white bg-black" : "text-black"
              }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
        {currentPage < lastPage && (
          <button
            onClick={() => onPageChange(currentPage + 1)}
            className="flex h-8 w-8 rounded items-center justify-center leading-8 text-black"
          >
            <FaChevronRight color="black" />
          </button>
        )}
      </ul>
    </div>
  );
};
export default Pagination;
