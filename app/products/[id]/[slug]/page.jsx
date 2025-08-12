import { Suspense } from "react";
import { getProductsByCategorie } from "@/lib/api";
import Card from "@/components/card/card";
import Filter from "@/components/filter";
import Pagination from "@/components/Pagination";
import Header from "@/components/header";
export const revalidate = 60;
import { Skeleton } from "antd";
export default async function Page({ params, searchParams }) {
  const { id, slug } = await params;
  const { page, brands, categories } = await searchParams;
  const products = await getProductsByCategorie(
    id,
    page,
    10,
    categories,
    brands
  );

  return (
    <>
      <Header />
      <div className="my-8 text-center">
        <h1 className="font-bold text-3xl text-gray-700">PRODUCTS</h1>
      </div>
      <div className="flex flex-col lg:flex-row p-4 gap-6">
        <div className="lg:w-72 w-1 ">
          <Filter />
        </div>

        <div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-6 gap-4">
            <Suspense fallback={<Skeleton />}>
              {products.products.map(
                ({ id, name, Images, Categorie, brandId, Brand }) => (
                  <Card
                    key={id}
                    id={id}
                    name={name}
                    url={`/product-detail/${id}/${name}`}
                    src={`https://api.projectme.my.id/images/item/${id}/${Images?.[0].name}`}
                    Categorie={Categorie}
                    brandId={brandId}
                    Brand={Brand}
                  />
                )
              )}
            </Suspense>
          </div>
          <Pagination
            totalItems={products.totalProducts}
            currentPage={products.currentPage}
            itemsPerPage={20}
            renderPageLink={(page) =>
              `/products/${id}/${slug}?page=${page}${
                categories ? `&categories=${categories}` : ""
              }${brands ? `&brands=${brands}` : ""}`
            }
          />
        </div>
      </div>
    </>
  );
}
