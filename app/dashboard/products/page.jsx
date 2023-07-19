import Table from "@/components/table";
import Pagination from "@/components/Pagination";
import DashboardLayout from "@/components/dashboard";
import getProducts from "@/lib/getProduct";
export default async function Products() {
  const { products } = await getProducts(1, 10);

  return (
    <DashboardLayout>
      <Table data={products.products} />
      <Pagination
        totalItems={products.totalProducts}
        currentPage={products.currentPage}
        itemsPerPage={10}
        renderPageLink={(page) => `/dashboard/products/${page}`}
      />
    </DashboardLayout>
  );
}
