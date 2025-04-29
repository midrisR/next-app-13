import Table from "./components/table";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/lib/getProduct";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";

import { getCategories, getBrands } from "@/lib/api";
export default async function Products({ searchParams }) {
  const { page } = await searchParams;
  const { accessToken } = await getServerSession(authOptions);
  const { products } = await getProducts(page, 10);
  const [categories, brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);

  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white py-4">
      <Table
        data={products.products}
        categories={categories}
        brands={brands}
        accessToken={accessToken}
      />
      <Pagination
        totalItems={products.totalProducts}
        currentPage={products.currentPage}
        itemsPerPage={10}
        renderPageLink={(page) => `/dashboard/products?page=${page}`}
      />
    </div>
  );
}
