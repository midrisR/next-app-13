import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Table from "../components/table";
import Pagination from "@/components/Pagination";
import getProducts from "@/lib/getProduct";
import { getCategories, getBrands } from "@/lib/api";

export default async function Page({ params }) {
  const { id } = await params;
  const { accessToken } = await getServerSession(authOptions);
  const { products } = await getProducts(id, 10);
  const [categories, brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);
  return (
    <div className="overflow-x-auto rounded-2xl shadow-xl bg-white py-4">
      <Table
        data={products.products}
        accessToken={accessToken}
        categories={categories}
        brands={brands}
      />
      <Pagination
        totalItems={products.totalProducts}
        currentPage={products.currentPage}
        itemsPerPage={10}
        renderPageLink={(page) => `/dashboard/products/${page}`}
      />
    </div>
  );
}
