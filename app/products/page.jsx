import Pagination from "@/components/Pagination";
import getProducts from "@/lib/getProduct";
import Card from "@/components/card/card";

export default async function Products({
  searchParams: { page, categories, brands },
}) {
  const { products } = await getProducts(page, 20, categories, brands);
  return (
    <div className="overflow-x-auto rounded-2xl py-4">
      <div className="w-full mt-12 flex flex-wrap gap-3 justify-center">
        <div className="w-full mt-6 grid grid-cols-1 gap-12 lg:grid-cols-4">
          {products.products.map(
            ({ id, name, Images, Categorie, brandId, Brand }) => (
              <Card
                id={id}
                name={name}
                url={`http://localhost:5000/images/item/${id}/${Images?.[0].name}`}
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
        renderPageLink={(page) => `/products?page=${page}${categories ? `&categories=${categories}` : ''}${brands ? `&brands=${brands}` : ''}`}
      />
    </div>
  );
}
