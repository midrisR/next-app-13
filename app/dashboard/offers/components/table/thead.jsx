export default function Thead() {
  return (
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500">
          product
        </th>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500">
          vendor
        </th>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500">
          price
        </th>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500">
          date
        </th>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500">
          Action
        </th>
      </tr>
    </thead>
  );
}
