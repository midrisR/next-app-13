import { getProductsByCategorie } from "@/lib/api";
import Card from "@/components/card/card";
import LayoutWithSidebar from "@/components/LayoutWithSidebar";
import Pagination from "@/components/Pagination";
import Header from "@/components/header";
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
      <LayoutWithSidebar>
        <div className="overflow-x-auto">
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full grid grid-cols-4 lg:grid-cols-3 gap-9">
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
            </div>
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
      </LayoutWithSidebar>
    </>
  );
}
