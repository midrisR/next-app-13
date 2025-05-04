import Card from "@/components/card/card";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/lib/getProduct";

export default async function Page({ params }) {
  const {id} = await params
  const { products } = await getProducts(id, 20);
  return (
    <div className="overflow-x-auto rounded-2xl py-4">
      <div className="w-full mt-12 flex flex-wrap gap-3 justify-center">
        <div className="w-full mt-6 grid grid-cols-1 gap-2 lg:grid-cols-3 xl:gap-x-8">
          {products.products.map(
            ({ id, name, Images, Categorie, brandId, Brand }) => (
              <Card
                id={id}
                name={name}
                src={Images}
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
        renderPageLink={(page) => `/products/${page}`}
      />
    </div>
  );
}
