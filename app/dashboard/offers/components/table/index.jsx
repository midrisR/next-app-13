"use client";
import { useEffect, useState } from "react";
import { paginate } from "@/lib/paginate";
import Thead from "./thead";
import Tbody from "./tbody";
import Pagination from "@/components/pagination/index";

export default function Table({ data, accessToken, vendors }) {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(data, currentPage, pageSize);
  return (
    <div className="overflow-x-auto w-full">
      <table className="divide-y-2 w-full divide-gray-200 bg-white text-sm lowercase ">
        <Thead />
        <Tbody
          data={paginatedPosts}
          vendors={vendors}
          accessToken={accessToken}
        />
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
