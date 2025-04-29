import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { getProductById } from "@/lib/api";
import { getCategories, getBrands } from "@/lib/api";
import DashboardLayout from "@/components/dashboard";
import Update from "../../components/update";

export default async function Page({ params }) {
  const { accessToken } = await getServerSession(authOptions);
  const { id } = await params;
  const [product, categories, brands] = await Promise.all([
    getProductById(id),
    getCategories(),
    getBrands(),
  ]);
  return (
    <Update
      productId={id}
      product={product}
      categories={categories}
      brands={brands}
      accessToken={accessToken}
    />
  );
}
