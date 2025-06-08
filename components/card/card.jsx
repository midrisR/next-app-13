import Image from "next/image";
import Link from "next/link";

export default function Card({
  id,
  name,
  src,
  Categorie,
  brandId,
  Brand,
  url,
}) {
  return (
    <div className="group relative mb-8 flex flex-col shadow-lg border border-gray-200 rounded-lg overflow-hidden">
      <Image
        src={src}
        alt={name}
        width={300}
        height={300}
        loading="lazy"
        className="w-full h-40 object-cover object-center transition duration-500 group-hover:scale-105"
      />
      <div className="bg-white">
        <div className="flex-1 mt-4 px-4">
          <Link href={url} className="uppercase text-sm text-gray-700 block">
            <span>{name}</span>
          </Link>
        </div>
        <div className="flex justify-between py-2 lowercase px-4 text-xs text-gray-500 font-medium">
          <p>{Categorie?.name}</p>
          {brandId && <p>brand : {Brand?.name}</p>}
        </div>
      </div>
    </div>
  );
}
