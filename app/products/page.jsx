import Pagination from "@/components/Pagination";
import { getProducts } from "@/lib/api";
import Card from "@/components/card/card";
import LayoutWithSidebar from "@/components/LayoutWithSidebar";
import Header from "@/components/header";
export default async function Products({ searchParams }) {
  const { page, categories, brands } = await searchParams;
  const perPage = 21;
  const { products, currentPage, totalPages, totalProducts } =
    await getProducts({
      page,
      perPage,
      categories,
      brands,
    });

  return (
    <>
      <Header />
      <LayoutWithSidebar>
        <div className="overflow-x-auto">
          <div className="w-full flex flex-wrap justify-center">
            <div className="w-full grid grid-cols-1 lg:grid-cols-4 gap-9">
              {products.map(
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
            totalItems={totalProducts}
            currentPage={currentPage}
            itemsPerPage={20}
            renderPageLink={(page) =>
              `/products?page=${page}${
                categories ? `&categories=${categories}` : ""
              }${brands ? `&brands=${brands}` : ""}`
            }
          />
        </div>
      </LayoutWithSidebar>
    </>
  );
}
