import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import DashboardLayout from "@/components/dashboard";
import Table from "../components/table";
import Pagination from "@/components/Pagination";
import getProducts from "@/lib/getProduct";
import { getCategories, getBrands } from "@/lib/api";
export default async function Page({ params: { id } }) {
  const { accessToken } = await getServerSession(authOptions);
  const { products } = await getProducts(id, 10);
  const [categories, brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);
  return (
    <DashboardLayout>
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
    </DashboardLayout>
  );
}
