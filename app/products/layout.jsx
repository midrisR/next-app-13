import Filter from "@/components/filter";
import Header from "@/components/header";
import { getCategories, getBrands } from "@/lib/api";
export default async function RootLayout({ children }) {
  const [categories, Brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);
  return (
    <>
      <Header />

      <Filter categories={categories} brands={Brands}>
        {children}
      </Filter>
    </>
  );
}
