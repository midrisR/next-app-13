import dynamic from "next/dynamic";
import Header from "@/components/header";
import { getCategories, getBanner } from "@/lib/api";
import { Card } from "antd";
import Link from "next/link";
const BannerSlider = dynamic(() => import("@/components/image/banner"), {
  ssr: false, // ⚠️ ini penting agar tidak error di server
});
export const revalidate = 60;

export function generateStaticParams() {}

export default async function Home() {
  const categories = await getCategories();
  const banner = await getBanner();

  return (
    <>
      <Header />
      <BannerSlider images={banner} />
      <div className="py-10 px-8 my-12">
        <div className="grid gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {categories.map(({ id, name, image }) => (
            <Link href={`products/${id}/${name}`} key={id}>
              <Card
                className="bg-white mx-auto shadow-xl"
                hoverable
                cover={
                  <img
                    className="h-56 object-cover"
                    alt={name}
                    width={240}
                    src={`https://api.projectme.my.id/images/categories/${id}/${image}`}
                  />
                }
              >
                <p className="py-4 text-lg font-base uppercase text-center">
                  {name}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
