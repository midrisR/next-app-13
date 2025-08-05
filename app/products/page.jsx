import Link from "next/link";
import Pagination from "@/components/Pagination";
import { getProducts } from "@/lib/api";
import LayoutWithSidebar from "@/components/LayoutWithSidebar";
import Header from "@/components/header";
import { Card } from "antd";
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
        <div className="w-full flex flex-wrap justify-center">
          <div className="w-full grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
            {products.map(({ id, name, Images, Categorie, brandId, Brand }) => (
              <Card
                className="bg-white mx-auto"
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    className="h-56 object-cover"
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
      </LayoutWithSidebar>
    </>
  );
}
