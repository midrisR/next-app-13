import Header from "@/components/header";
import { getCategories } from "@/lib/api";
import Card from "@/components/card/card";
export default async function Home() {
  const categories = await getCategories();
  return (
    <>
      <Header />
      <div className="w-full mt-12 flex flex-wrap gap-4 justify-center">
        {categories.map(({ id, name, image }) => (
          <div key={id} className="w-1/6">
            <Card
              key={id}
              name={name}
              url={`http://localhost:5000/images/categories/${id}/${image}`}
            />
          </div>
        ))}
      </div>
    </>
  );
}
