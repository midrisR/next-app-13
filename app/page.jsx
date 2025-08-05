import dynamic from "next/dynamic";
import Header from "@/components/header";
import { getCategories, getBanner } from "@/lib/api";

import Link from "next/link";
const BannerSlider = dynamic(() => import("@/components/image/banner"), {
  ssr: false, // ⚠️ ini penting agar tidak error di server
});
export default async function Home() {
  const categories = await getCategories();
  const banner = await getBanner();

  return (
    <>
      <Header />
      <BannerSlider images={banner} />
      <div className="py-10 px-8 my-12">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center">
          {categories.map(({ id, name, image }) => (
            <div
              key={id}
              className="bg-white rounded shadow-md overflow-hidden w-64"
            >
              <img
                key={id}
                className="block w-full h-64 rounded"
                alt={name}
                src={`https://api.projectme.my.id/images/categories/${id}/${image}`}
                url={`/products/${id}/${name}`}
              />
              <Link href={`products/${id}/${name}`}>
                <p className="py-4 text-lg font-base uppercase text-center">
                  {name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
