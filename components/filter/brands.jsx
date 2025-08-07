import { useState, useCallback, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function FilterBrands({ brands }) {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [openSections, setOpenSections] = useState(true);
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Ambil parameter dari URL saat pertama render
  useEffect(() => {
    const brandsParam = searchParams.get("brands") || "";
    const parsed = brandsParam
      .split(",")
      .map((b) => b.trim())
      .filter((b) => b);
    setSelectedBrands(parsed);

    // Bersihkan query kosong dari URL
    const params = new URLSearchParams(searchParams);
    let modified = false;
    for (const [key, value] of params.entries()) {
      if (!value) {
        params.delete(key);
        modified = true;
      }
    }
    if (modified) {
      const updated = params.toString();
      if (updated !== searchParams.toString()) {
        router.push(`${pathname}?${updated}`);
      }
    }
  }, [searchParams, pathname]);

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
      .toLowerCase()
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.slice(1))
      .join(" ");
  };

  const handleChange = (e) => {
    const { value, checked, name } = e.target;

    const updatedBrands = checked
      ? [...selectedBrands, value]
      : selectedBrands.filter((b) => b !== value);

    setSelectedBrands(updatedBrands);

    const queryString = createQueryString(name, updatedBrands);
    router.push(`${pathname}?${queryString}`);
  };

  const toggleSection = () => {
    setOpenSections((prev) => !prev);
  };

  return (
    <div className="mb-6">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleSection}
      >
        <p className="font-medium">Brand</p>
        {openSections ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {openSections && (
        <div className="mt-2 text-gray-700">
          {brands.map((brand) => (
            <label className="flex items-center gap-2 mt-3" key={brand.id}>
              <input
                type="checkbox"
                name="brands"
                value={brand.name}
                checked={selectedBrands.includes(brand.name)}
                onChange={handleChange}
                className="accent-black"
              />
              {capitalEachWords(brand.name)}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
