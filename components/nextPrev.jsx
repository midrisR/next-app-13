"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
export default function NextPrev({
  children,
  urlPrev,
  urlNext,
  currentPage,
  totalItems,
  itemsPerPage,
}) {
  const router = useRouter();
  const lastPage = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    if (currentPage === 1) {
      return;
    }
    router.push(urlPrev);
  };

  const handleNext = () => {
    if (lastPage === currentPage) {
      return;
    }
    router.push(urlNext);
  };
  return (
    <>
      {currentPage > 1 && (
        <button
          onClick={handlePrev}
          className="flex rounded items-center justify-center leading-8 text-black"
        >
          <FaChevronLeft />
        </button>
      )}
      {children}
      {currentPage < lastPage && (
        <button
          onClick={handleNext}
          className="flex h-8 w-8 rounded items-center justify-center leading-8 text-black"
        >
          <FaChevronRight color="black" />
        </button>
      )}
    </>
  );
}
