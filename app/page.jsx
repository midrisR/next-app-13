import dynamic from "next/dynamic";
import Header from "@/components/header";
import { getCategories, getBanner, getEmploye } from "@/lib/api";
import Footer from "@/components/footer";

const BannerSlider = dynamic(() => import("@/components/image/banner"), {
  ssr: false, // ⚠️ ini penting agar tidak error di server
});
export default async function Home() {
  const categories = await getCategories();
  const banner = await getBanner();
  const employe = await getEmploye();

  return (
    <>
      <Header />
      <BannerSlider images={banner} />
      <div className="py-10 px-12">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ id, name, image }) => (
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img
                key={id}
                className=" w-full h-64 object-cover rounded"
                alt={name}
                src={`http://localhost:5000/images/categories/${id}/${image}`}
                url={`/products/${id}/${name}`}
              />
              <p className="py-4 text-lg font-bold uppercase text-center">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer employes={employe} />
    </>
  );
}
