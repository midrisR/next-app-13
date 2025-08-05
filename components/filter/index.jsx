"use client";

import { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { useParams } from "next/navigation";
import FilterCategories from "./categories";
import FilterBrands from "./brands";

export default function Filter({ children, categories, brands }) {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const x = useParams();

  return (
    <main className="mx-auto w-full px-4 sm:px-6 lg:px-28 relative">
      {/* Tombol filter hanya di mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden bg-blue-500 text-white py-1 px-4 mx-4 my-6 rounded"
      >
        Filter
      </button>

      {/* Sidebar drawer mobile */}
      <div
        className={`fixed top-0 left-0 z-50 h-full w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:hidden`}
      >
        <div className="p-4 border-b flex justify-between items-center">
          <h2 className="text-lg font-semibold">Filter</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 text-sm"
          >
            ✕
          </button>
        </div>
        <div className="p-4 overflow-y-auto  max-h-screen">
          {!id && (
            <Disclosure as="div">
              {({ open }) => (
                <FilterCategories categories={categories} id={id} open={open} />
              )}
            </Disclosure>
          )}
          <Disclosure as="div">
            {({ open }) => <FilterBrands brands={brands} id={id} open={open} />}
          </Disclosure>
        </div>
      </div>

      {/* Overlay background (untuk close sidebar saat klik di luar) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
        />
      )}

      {/* Layout utama */}
      <section aria-labelledby="products-heading" className="lg:pb-24 lg:pt-6">
        <div className="grid grid-cols-1 gap-x-3 gap-y-10 lg:grid-cols-4">
          {/* Sidebar filter untuk desktop */}
          <div className="hidden lg:block max-h-screen">
            {!id && (
              <Disclosure as="div">
                {({ open }) => (
                  <FilterCategories
                    categories={categories}
                    id={id}
                    open={open}
                  />
                )}
              </Disclosure>
            )}

            <Disclosure as="div">
              {({ open }) => (
                <FilterBrands brands={brands} id={id} open={open} />
              )}
            </Disclosure>
          </div>

          {/* Produk list */}
          <div className="lg:col-span-3 px-4">{children}</div>
        </div>
      </section>
    </main>
  );
}
