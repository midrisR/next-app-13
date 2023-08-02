import Header from "@/components/header";
import Card from "@/components/card/card";
import Pagination from "@/components/Pagination";
import getProducts from "@/lib/getProduct";

export default async function Products() {
  const { products } = await getProducts(1, 20);

  return (
    <div className="overflow-x-auto rounded-2xl py-4">
      <div className="w-full mt-12 flex flex-wrap gap-3 justify-center">
        <div className="w-full mt-6 grid grid-cols-1 gap-2 lg:grid-cols-3 xl:gap-x-8">
          {products.products.map(({ id, name, Images, Categorie }) => (
            <div className="group relative mb-8 flex flex-col">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                  src={`http://localhost:5000/images/item/${id}/${Images?.[0].name}`}
                  alt="Front of men&#039;s Basic Tee in black."
                  className="h-full w-full object-cover object-center lg:h-64 lg:w-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-sm text-gray-700">
                  <a href="#">
                    <span
                      aria-hidden="true"
                      className="absolute inset-0"
                    ></span>
                    {name}
                  </a>
                </h3>
              </div>
              <p className="py-1 text-sm text-black font-medium">
                {Categorie?.name}
              </p>
            </div>
          ))}
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
