import FilterSideBar from "./FilterSideBar";
import { getCategories, getBrands } from "@/lib/api";

export default async function Filter() {
  const [categories, Brands] = await Promise.all([
    getCategories(),
    getBrands(),
  ]);
  return <FilterSideBar categories={categories} brands={Brands} />;
}
