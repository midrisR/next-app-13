import Filter from "@/components/filter";
import { getCategories, getBrands } from "@/lib/api";

export default async function LayoutWithSidebar({ children }) {
  const [categories, Brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);
  return (
    <Filter categories={categories} brands={Brands}>
      {children}
    </Filter>
  );
}
