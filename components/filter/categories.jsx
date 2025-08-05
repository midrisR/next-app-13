import { useState, useCallback, useEffect } from "react";
import { Listbox, Disclosure } from "@headlessui/react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi2";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
const START = 0;
const LIMIT = 8;

export default function FilterCategories({ categories, open }) {
  const [list, setList] = useState(categories.slice(START, LIMIT));
  const [expand, setExpand] = useState(false);
  const [category, setCategory] = useState([]);

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    if (searchParams.get("categories")) {
      const toArray = searchParams.get("categories").split(",");
      setCategory(toArray);
    }
    const params = new URLSearchParams(searchParams);
    for (const [key, value] of searchParams.entries()) {
      if (!value) {
        params.delete(key);
        const deleted = params.toString();
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
    setList(categories);
    setExpand(true);
  };

  const checked = (name) => {
    if (category.indexOf(name) !== -1) {
      return true;
    }
    return false;
  };

  const hideMore = () => {
    setList(categories.slice(START, LIMIT));
    setExpand(false);
  };

  const capitalEachWords = (word) => {
    const words = word.split(" ");
    const capital = words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
    return capital;
  };

  const handleChange = (e) => {
    const { value, checked, name } = e.target;
    let newArr = [...category];
    if (checked) {
      newArr = [...category, value];
      setCategory(newArr);
    } else {
      newArr.splice(category.indexOf(value), 1);
      setCategory(newArr);
    }
    router.push(
      window.location.pathname + "?" + createQueryString(name, newArr)
    );
  };

  return (
    <div className="bg-white">
      <Disclosure.Button className="flex w-full items-center justify-between font-semibold text-sm bg-white py-3 px-4 rounded text-black">
        Categories
        {open ? <HiChevronDown /> : <HiChevronUp />}
      </Disclosure.Button>
      {!open && (
        <div className="relative">
          <Listbox
            as="div"
            className="mt-1 w-full py-1 text-base ring-opacity-5 focus:outline-none sm:text-sm border-b border-gray-200 pb-6 mb-6"
          >
            <div className="relative mt-1 space-y-6 mx-4">
              {list.map((categorie) => {
                return (
                  <div className="flex items-center" key={categorie.id}>
                    <input
                      id="filter-mobile-category-1"
                      name="categories"
                      type="checkbox"
                      defaultValue={categorie.name}
                      defaultChecked={checked(categorie.name)}
                      className="h-4 w-4 border-indigo-700 text-indigo-600 focus:ring-0"
                      onClick={handleChange}
                    />
                    <label className="ml-3 min-w-0 flex-1">
                      {capitalEachWords(categorie.name)}
                    </label>
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
                className="w-full flex mt-4 justify-center items-center  space-x-3 text-gray-400"
                onClick={loadMore}
              >
                <p className="text-sm block text-center">show more</p>
                <HiChevronDown />
              </button>
            )}
          </Listbox>
        </div>
      )}
    </div>
  );
}
