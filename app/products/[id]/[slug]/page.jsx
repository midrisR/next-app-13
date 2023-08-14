import { getProductsByCategorie } from "@/lib/api";
import Card from "@/components/card/card";
import Pagination from "@/components/Pagination";
export default async function Page({ params, searchParams }) {
  const { id, slug } = params;
  const { brands, page } = searchParams;
  const { products } = await getProductsByCategorie(id, page, 20, brands);
  return (
    <div className="overflow-x-auto rounded-2xl py-4">
      <div className="w-full mt-12 flex flex-wrap gap-3 justify-center">
        <div className="w-full mt-6 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {products.products.map(
            ({ id, name, Images, Categorie, brandId, Brand }) => (
              <Card
                id={id}
                name={name}
                Images={Images}
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
            brands !== undefined ? `&brands=${brands}` : ""
          }`
        }
      />
    </div>
  );
}
