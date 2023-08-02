"use client";
import Thead from "./thead";
import Tbody from "./tbody";
import Create from "../create";
export default function Table({ data, accessToken, categories, brands }) {
  return (
    <div className="mt-4 w-5/6 mx-auto">
      <Create
        categories={categories}
        brands={brands}
        accessToken={accessToken}
      />
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm lowercase">
        <Thead />
        <Tbody data={data} accessToken={accessToken} />
      </table>
    </div>
  );
}
