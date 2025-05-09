import Pagination from "@/components/Pagination";
import { getProducts } from "@/lib/getProduct";
import Card from "@/components/card/card";
import LayoutWithSidebar from "@/components/LayoutWithSidebar";
import Header from "@/components/header";
export default async function Products({ searchParams }) {
  const { page, categories, brands } = await searchParams;
  const { products } = await getProducts(page, 21, categories, brands);

  return (
    <>
      <Header />
      <div className="my-8 container mx-auto">
        <LayoutWithSidebar>
          <div className="overflow-x-auto">
            <div className="w-full flex flex-wrap justify-center">
              <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-9">
                {products.products.map(
                  ({ id, name, Images, Categorie, brandId, Brand }) => (
                    <Card
                      key={id}
                      id={id}
                      name={name}
                      url={`/product-detail/${id}/${name}`}
                      src={`http://localhost:5000/images/item/${id}/${Images?.[0].name}`}
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
                `/products?page=${page}${
                  categories ? `&categories=${categories}` : ""
                }${brands ? `&brands=${brands}` : ""}`
              }
            />
          </div>
        </LayoutWithSidebar>
      </div>
    </>
  );
}
