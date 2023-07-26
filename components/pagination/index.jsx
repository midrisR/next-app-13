"use client";
const Pagination = ({ items, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(items / pageSize);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <div>
      <ul className="flex gap-3 py-4 justify-center bg-white">
        {pages.map((page) => (
          <li
            key={page}
            className={`px-4 py-1 rounded cursor-pointer ${
              page === currentPage
                ? "bg-blue-400 text-white font-semibold"
                : "text-slate-800"
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
