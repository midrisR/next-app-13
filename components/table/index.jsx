"use client";
import Thead from "./thead";
import Tbody from "./tbody";
import TableLoading from "./loading";
export default function Table({ data, deleteProduct, openModal }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <Thead />
        <Tbody data={data} openModal={openModal} />
      </table>
    </div>
  );
}
