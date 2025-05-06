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
  console.log(src);

  return (
    <div className="group relative mb-8 flex flex-col shadow-lg border border-gray-200 rounded-lg overflow-hidden max-h-80">
      <Image
        src={src}
        alt={name}
        width={300}
        height={300}
        loading="lazy"
        className="w-full object-cover max-h-48 object-center transition duration-500 group-hover:scale-105 lg:w-full overflow-hidden"
      />
      <div className="flex-1 mt-8">
        <div className="text-sm text-gray-700 px-4">
          <Link href={url} className="uppercase text-sm">
            <span>{name}</span>
          </Link>
        </div>
      </div>
      <div className="flex justify-between py-2 lowercase px-4">
        <p className="py-1 text-xs text-gray-500 font-medium">
          {Categorie?.name}
        </p>
        {brandId && (
          <p className="py-1 text-xs text-gray-500 font-medium">
            brand : {Brand?.name}
          </p>
        )}
      </div>
    </div>
  );
}
