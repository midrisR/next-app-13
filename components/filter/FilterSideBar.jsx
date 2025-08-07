"use client";
import { Filter, X } from "lucide-react";
import FilterBrands from "./brands";
import FilterCategories from "./categories";

export default function FilterSideBar({ brands, categories }) {
  return (
    <div className="w-72 bg-white shadow-md p-4 rounded-lg">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2 font-semibold">
          <Filter size={18} /> Filters
        </div>
      </div>
      {/* categorie */}
      <FilterCategories categories={categories} />
      {/* brand */}
      <FilterBrands brands={brands} />

      {/* Buttons */}
      <div className="flex flex-col gap-2">
        {/* <button className="bg-black text-white py-2 rounded-md">Apply</button> */}
        <button className="bg-gray-100 py-2 rounded-md">Reset</button>
      </div>
    </div>
  );
}
