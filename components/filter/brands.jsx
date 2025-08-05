import { useState, useCallback, useEffect } from "react";
import { Listbox, Disclosure } from "@headlessui/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const START = 0;
const LIMIT = 20;

export default function FilterBrands({ brands, open }) {
  const [list, setList] = useState(brands.slice(START, LIMIT));
  const [expand, setExpand] = useState(false);
  const [merk, setMerk] = useState([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams.get("brands")) {
      const toArray = searchParams.get("brands").split(",");
      setMerk(toArray);
    }

    const params = new URLSearchParams(searchParams);
    let modified = false;
    for (const [key, value] of searchParams.entries()) {
      if (!value) {
        params.delete(key);
        modified = true;
      }
    }

    if (modified) {
      const deleted = params.toString();
      if (deleted !== searchParams.toString()) {
        router.push(window.location.pathname + "?" + deleted);
      }
    }
  }, [searchParams, pathname]);

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);
      params.set("page", 1);
      return params.toString();
    },
    [searchParams]
  );

  const loadMore = () => {
    setList(brands);
    setExpand(true);
  };

  const hideMore = () => {
    setList(brands.slice(START, LIMIT));
    setExpand(false);
  };

  const checked = (name) => {
    if (merk.indexOf(name) !== -1) {
      return true;
    }
    return false;
  };

  const capitalEachWords = (word) => {
    const words = word.toLowerCase().split(" ");
    const capital = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    return capital;
  };

  const handleChange = (e) => {
    const { value, checked, name } = e.target;
    let newArr = [...merk];
    if (checked) {
      newArr = [...merk, value];
      setMerk(newArr);
    } else {
      newArr.splice(merk.indexOf(value), 1);
      setMerk(newArr);
    }
    router.push(
      window.location.pathname + "?" + createQueryString(name, newArr)
    );
  };

  return (
    <div className="bg-white">
      <Disclosure.Button className="flex w-full items-center justify-between font-semibold text-sm bg-white py-3 px-4 rounded text-black">
        Brands
        {open ? <HiChevronDown /> : <HiChevronUp />}
      </Disclosure.Button>
      {!open && (
        <div className="relative">
          <Listbox
            as="div"
            className="mt-1 w-full py-1 text-base ring-opacity-5 focus:outline-none sm:text-sm border-b border-gray-200 pb-6 mb-6"
          >
            <div className="relative mt-1 flex flex-wrap justify-center mx-4">
              {list.map((brand) => {
                return (
                  <div className="w-1/2 mb-6" key={brand.id}>
                    <div className="flex items-center">
                      <input
                        id="filter-mobile-merk-1"
                        name="brands"
                        type="checkbox"
                        defaultValue={brand.name}
                        defaultChecked={checked(brand.name)}
                        className="h-4 w-4 border-indigo-700 text-indigo-600 focus:ring-0"
                        onChange={handleChange}
                      />
                      <label className="ml-3 min-w-0 flex-1">
                        {capitalEachWords(brand.name)}
                      </label>
                    </div>
                  </div>
                );
              })}
            </div>
            {expand ? (
              <button
                className="w-full flex mt-4 justify-center items-center  space-x-3 text-gray-400"
                onClick={hideMore}
              >
                <p className="text-sm block text-center">hide more</p>
                <HiChevronUp />
              </button>
            ) : (
              <button
                className="w-full flex mt-4 pb-4 justify-center items-center  space-x-3 text-gray-400"
                onClick={loadMore}
              >
                <p className="text-sm block text-center ">show more</p>
                <HiChevronDown />
              </button>
            )}
          </Listbox>
        </div>
      )}
    </div>
  );
}
