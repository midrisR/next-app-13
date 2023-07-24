import Table from "./components/table";
import Pagination from "@/components/Pagination";
import DashboardLayout from "@/components/dashboard";
import getProducts from "@/lib/getProduct";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import Create from "./components/create";

import { getCategories, getBrands } from "@/lib/api";
export default async function Products() {
  const { accessToken } = await getServerSession(authOptions);

  const { products } = await getProducts(1, 10);
  const [categories, brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);
  return (
    <DashboardLayout>
      <Create
        categories={categories}
        brands={brands}
        accessToken={accessToken}
      />
      <Table data={products.products} accessToken={accessToken} />
      <Pagination
        totalItems={products.totalProducts}
        currentPage={products.currentPage}
        itemsPerPage={10}
        renderPageLink={(page) => `/dashboard/products/${page}`}
      />
    </DashboardLayout>
  );
}
