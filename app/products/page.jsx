import Link from "next/link";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/lib/api";
import Filter from "@/components/filter";
import Header from "@/components/header";
import { Card } from "antd";
export default async function Products({ searchParams }) {
  const { page, categories, brands } = await searchParams;
  const perPage = 20;
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
      <div className="my-8 text-center">
        <h1 className="font-bold text-3xl text-gray-700">PRODUCTS</h1>
      </div>
      <div className="flex flex-col lg:flex-row p-4 gap-6">
        <div className="lg:w-72 w-1 ">
          <Filter />
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-4 2xl:grid-cols-4 gap-4">
            {products.map(({ id, name, Images, Categorie, brandId, Brand }) => (
              <Card
                key={id}
                className="bg-white mx-auto"
                hoverable
                cover={
                  <img
                    className="h-56"
                    alt={name}
                    src={`https://api.projectme.my.id/images/item/${id}/${Images?.[0].name}`}
                  />
                }
              >
                <Link
                  href={`/product-detail/${id}/${name}`}
                  className="uppercase text-sm text-gray-700 block"
                >
                  <span>{name}</span>
                </Link>

                <div className="flex content-end justify-between py-2 lowercase text-xs text-gray-500 font-medium">
                  <p className="bold">{Categorie?.name}</p>
                  {brandId && <p>brand : {Brand?.name}</p>}
                </div>
              </Card>
            ))}
          </div>
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
    </>
  );
}
