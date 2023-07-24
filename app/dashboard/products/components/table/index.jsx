"use client";
import Thead from "./thead";
import Tbody from "./tbody";
export default function Table({ data, accessToken }) {
  return (
    <div className="overflow-x-auto rounded border border-slate-300 shadow-lg mt-12 w-5/6 mx-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm lowercase">
        <Thead />
        <Tbody data={data} accessToken={accessToken} />
      </table>
    </div>
  );
}
