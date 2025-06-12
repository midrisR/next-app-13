import Header from "@/components/header";
import { getCategories } from "@/lib/api";
import Card from "@/components/card/card";

export default async function Home() {
  const categories = await getCategories();
  return (
    <>
      <Header />
      <div className="py-10 px-12">
        <div className="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categories.map(({ id, name, image }) => (
            <Card
              key={id}
              id={id}
              name={name}
              src={`http://localhost:5000/images/categories/${id}/${image}`}
              url={`/products/${id}/${name}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
