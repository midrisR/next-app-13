import getProducts from "@/lib/getProduct";
import { PER_PAGE } from "./[id]/page";
import Table from "@/components/table";
import Pagination from "@/components/Pagination";
import DashboardLayout from "@/components/dashboard";

async function Products() {
  const { products } = await getProducts(1, PER_PAGE);
  return (
    <DashboardLayout>
      <Table
        data={products.products}
        renderPageLink={(page) => `/dashboard/products/detail/${page}`}
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

export default Products;
