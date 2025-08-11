import { getProductsById } from "@/lib/api";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ImageSlider from "@/components/image/ImageSlider";
import Header from "@/components/header";

export const revalidate = 60;

export async function generateMetadata({ params }) {
  const { id } = await params;
  const { product } = await getProductsById(id);
  return {
    title: product.name,
    description: product.metaDescription,
    keywords: product.metaKeywords,
    openGraph: {
      title: `Jual ${product.name}`,
      description: product.metaDescription,
      images: [
        {
          url: product.Images?.[0].name,
          width: 500,
          height: 500,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const { product } = await getProductsById(id);

  return (
    <>
      <Header />
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Gambar Produk */}
          <div className="w-full md:w-[400px] flex-shrink-0">
            <ImageSlider
              id={product.id}
              images={product.Images}
              alt={product.name}
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="p-6 text-gray-800 space-y-6 ">
              <h1 className="text-3xl font-bold text-gray-800">
                {product.name}
              </h1>
              {product.metaKeywords && (
                <span className="italic text-xs lowercase text-gray-400">
                  {product.metaKeywords}
                </span>
              )}
              <Markdown rehypePlugins={[rehypeRaw]}>
                {product.description}
              </Markdown>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
