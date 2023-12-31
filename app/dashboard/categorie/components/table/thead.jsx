export default function Thead() {
  return (
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500">
          Name
        </th>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-4 text-slate-800">
          publish
        </th>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-4 text-slate-800">
          CreatedAt
        </th>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500">
          Action
        </th>
      </tr>
    </thead>
  );
}
