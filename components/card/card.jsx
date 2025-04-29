import Image from "next/image";
import Link from "next/link";
import { generateSlug } from "@/app/utils/slug";

export default function Card({ id, name, url, Categorie, brandId, Brand }) {
  return (
    <div className="group relative mb-8 flex flex-col shadow-md rounded-lg overflow-hidden max-h-80">
      <div className="aspect-h-1 aspect-w-1 w-full lg:aspect-none overflow-hidden">
        <Image
          src={url}
          alt={name}
          width={300}
          height={300}
          loading="lazy"
          className="w-full object-cover max-h-48 object-center transition duration-500 group-hover:scale-105 lg:w-full overflow-hidden"
        />
      </div>
      <div className="flex-1 mt-8">
        <div className="text-sm text-gray-700 px-4">
          <Link
            href={`/products/${id}/${generateSlug(name)}`}
            className="uppercase text-sm"
          >
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
