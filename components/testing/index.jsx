"use client";
import Thead from "./thead";
import Tbody from "./tbody";
export default function Table({ data, columns, modal }) {
  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
        <Thead columns={columns} />
        <Tbody data={data} columns={columns} modal={modal} />
      </table>
    </div>
  );
}
