import DashboardLayout from "@/components/dashboard";
import Table from "@/components/table";
import Pagination from "@/components/Pagination";
import getProducts from "@/lib/getProduct";
export default async function Page({ params }) {
  const { id } = params;
  const { products } = await getProducts(id, 10);
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
