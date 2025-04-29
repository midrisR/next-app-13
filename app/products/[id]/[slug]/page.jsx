import { getProductsById } from "@/lib/getProduct";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import ImageSlider from "@/components/image/ImageSlider";

export async function generateMetadata({ params }) {
  const { product } = await getProductsById(params.id);
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | MyStore`,
      description: product.description,
      images: [
        {
          url: product.Images?.[0].name,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function Page({ params }) {
  const { id } = await params;
  const { product } = await getProductsById(id);

  return (
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
          <h1 className="text-3xl font-bold text-gray-800">{product.name}</h1>
          <Markdown rehypePlugins={[rehypeRaw]}>{product.description}</Markdown>
        </div>
      </div>
    </div>
  );
}
