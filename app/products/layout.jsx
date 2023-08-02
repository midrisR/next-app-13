import Filter from "./filter";
import Header from "@/components/header";
import { getCategories, getBrands } from "@/lib/api";
export default async function RootLayout({ children }) {
  const [categories, Brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);
  const data = categories.map(({ id, name }) => {
    return { id, name };
  });
  return (
    <>
      <Header />
      <div className="bg-red-300">
        <Filter categories={data} brands={Brands}>
          {children}
        </Filter>
      </div>
    </>
  );
}
