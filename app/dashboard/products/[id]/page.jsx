import getProducts from "@/lib/getProduct";
export const PER_PAGE = 10;
import DashboardLayout from "@/components/dashboard";
import Table from "@/components/table";
import Pagination from "@/components/Pagination";
export default async function Page({ params: { id } }) {
  const { products } = await getProducts(id, PER_PAGE);
  return (
    <DashboardLayout>
      <Table
        data={products.products}
        renderPageLink={(page) => `/dashboard/products/detail/${page}`}
      />
      <Pagination
        totalItems={products.totalProducts}
        currentPage={products.currentPage}
        itemsPerPage={PER_PAGE}
        renderPageLink={(page) => `/dashboard/products/${page}`}
      />
    </DashboardLayout>
  );
}
