import Image from "next/image";
export default function Card({ id, name, Images, Categorie, brandId, Brand }) {
  return (
    <div className="group relative mb-8 flex flex-col">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none lg:h-60">
        <Image
          src={`http://localhost:5000/images/item/${id}/${Images?.[0].name}`}
          alt={name}
          width={300}
          height={300}
          loading="lazy"
          className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105 lg:h-64 lg:w-full"
        />
      </div>
      <div className="flex-1 mt-8">
        <div className="text-sm text-gray-700">
          <a href="#" className="uppercase text-sm">
            <span aria-hidden="true" className="absolute inset-0"></span>
            {name}
          </a>
        </div>
      </div>
      <div className="flex justify-between py-2 lowercase">
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
