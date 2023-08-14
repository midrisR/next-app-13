"use client";

import { Disclosure } from "@headlessui/react";
import { useParams } from "next/navigation";
import FilterCategories from "./categories";
import FilterBrands from "./brands";
export default function Filter({ children, categories, brands }) {
  const { id } = useParams();

  return (
    <main className="mx-auto w-full px-4 sm:px-6 lg:px-32">
      <section aria-labelledby="products-heading" className="pb-24 pt-6">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
          <div className="DIV">
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <FilterCategories
                    categories={categories}
                    id={id}
                    open={open}
                  />
                </>
              )}
            </Disclosure>
            <Disclosure as="div">
              {({ open }) => (
                <>
                  <FilterBrands brands={brands} id={id} open={open} />
                </>
              )}
            </Disclosure>
          </div>
          <div className="lg:col-span-3">{children}</div>
        </div>
      </section>
    </main>
  );
}
