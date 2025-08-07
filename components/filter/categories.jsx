import { useState, useCallback, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function FilterCategories({ categories }) {
  const [selectedCat, setSelectedCat] = useState([]);
  const [openSections, setOpenSections] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const toggleSection = () => {
    setOpenSections((prev) => !prev);
  };

  useEffect(() => {
    const catParams = searchParams.get("categories") || "";
    const parsed = catParams
      .split(",")
      .map((b) => b.trim())
      .filter((b) => b);
    setSelectedCat(parsed);
  }, [searchParams]);

  const createQueryString = useCallback(
    (name, values) => {
      const params = new URLSearchParams(searchParams);
      if (values.length > 0) {
        params.set(name, values.join(","));
      } else {
        params.delete(name);
      }
      params.set("page", 1);
      return params.toString();
    },
    [searchParams]
  );

  const capitalEachWords = (word) => {
    return word
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  };

  const handleChange = (e) => {
    const { value, checked, name } = e.target;

    const updatedCategories = checked
      ? [...selectedCat, value]
      : selectedCat.filter((item) => item !== value);

    setSelectedCat(updatedCategories);
    const newQuery = createQueryString(name, updatedCategories);
    router.push(`${pathname}?${newQuery}`);
  };

  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <p className="font-medium">Categorie</p>
        {openSections ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {openSections && (
        <div className="mt-2 text-gray-700">
          {categories.map((cat) => (
            <label className="flex items-center gap-2 mt-3" key={cat.id}>
              <input
                type="checkbox"
                name="categories"
                value={cat.name}
                checked={selectedCat.includes(cat.name)}
                onChange={handleChange}
                className="accent-black"
              />
              {capitalEachWords(cat.name)}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
