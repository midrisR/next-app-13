import Header from "@/components/header";
import { getCategories } from "@/lib/api";
import Card from "@/components/card/card";

export default async function Home() {
  const categories = await getCategories();
  return (
    <>
      <Header />
      <div className="w-full mt-12 flex flex-wrap justify-center">
        {categories.map(({ id, name, image }) => (
          <div key={id} className="w-1/4 px-8">
            <Card
              key={id}
              id={id}
              name={name}
              src={`http://localhost:5000/images/categories/${id}/${image}`}
              url={`/products/${id}/${name}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
