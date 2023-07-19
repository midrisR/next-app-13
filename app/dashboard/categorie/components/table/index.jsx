"use client";
import { useState } from "react";
import { paginate } from "@/lib/paginate";
import Thead from "./thead";
import Tbody from "./tbody";
import Pagination from "@/components/pagination/index";

export default function Table({ data }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(data, currentPage, pageSize);

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 w-1/3">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <Thead />
        <Tbody data={paginatedPosts} />
      </table>
      <Pagination
        items={data.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={onPageChange}
      />
    </div>
  );
}
