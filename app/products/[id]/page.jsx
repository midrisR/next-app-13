import Header from "@/components/header";
import Card from "@/components/card/card";
import Pagination from "@/components/Pagination";
import getProducts from "@/lib/getProduct";

export default async function Page({ params: { id } }) {
  const { products } = await getProducts(id, 20);
  return (
    <>
      <Header />
      <div className="overflow-x-auto rounded-2xl shadow-xl bg-white py-4">
        <div className="w-full mt-12 flex flex-wrap gap-4 justify-center">
          {products.products.map(({ id, name, Images, Categorie }) => (
            <div className="w-1/5 mb-8">
              <div className="group relative m-10 h-4/6 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
                <a
                  className="relative flex-1 mx-3 mt-3 flex items-center h-60 overflow-hidden rounded-xl"
                  href="#"
                >
                  <img
                    className="object-cover  transition duration-500 group-hover:scale-105"
                    src={`http://localhost:5000/images/item/${id}/${Images[0].name}`}
                    alt={name}
                  />
                </a>
                <div className="mt-4 px-5 pb-5">
                  <a href="#">
                    <span className="block text-base tracking-tight text-slate-900">
                      {name}
                    </span>
                    {Categorie?.name && (
                      <span className="bg-black rounded-full w-fit px-2 py-1 mt-3 block text-sm tracking-tight text-white">
                        {Categorie?.name}
                      </span>
                    )}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Pagination
          totalItems={products.totalProducts}
          currentPage={products.currentPage}
          itemsPerPage={20}
          renderPageLink={(page) => `/products/${page}`}
        />
      </div>
    </>
  );
}
