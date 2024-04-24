"use client";
import { useEffect, useState } from "react";
import { paginate } from "@/lib/paginate";
import Thead from "./thead";
import Tbody from "./tbody";
import Pagination from "@/components/pagination/index";

export default function Table({ data, accessToken, vendors }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(data, currentPage, itemsPerPage);
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
        totalItems={data.length}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}
