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
    <div className="my-8 rounded shadow-lg bg-slate-100 duration-300 hover:-translate-y-1">
      <Image
        src={src}
        alt={name}
        width={200}
        height={200}
        loading="lazy"
        className="rounded w-full object-cover"
      />

      <div className="flex-1 mt-4 px-4">
        <Link href={url} className="uppercase text-sm text-gray-700 block">
          <span>{name}</span>
        </Link>
      </div>
      <div className="flex justify-between py-2 lowercase px-4 text-xs text-gray-500 font-medium">
        <p className="bold">{Categorie?.name}</p>
        {brandId && <p>brand : {Brand?.name}</p>}
      </div>
    </div>
  );
}
