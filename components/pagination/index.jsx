"use client";
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <div>
      <ul className="flex gap-4 py-4 justify-center bg-white">
        {pages.map((page) => (
          <li
            key={page}
            className={`h-8 w-8 rounded flex items-center justify-center leading-8 cursor-pointer ${
              page === currentPage ? "text-white bg-black" : "text-black"
            }`}
            onClick={() => onPageChange(page)}
          >
            {page}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Pagination;
