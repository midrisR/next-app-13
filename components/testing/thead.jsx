export default function Thead({ columns }) {
  return (
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        {columns.map(({ title, key }) => (
          <th
            key={key}
            className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500"
          >
            {title}
          </th>
        ))}
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-slate-500">
          Action
        </th>
      </tr>
    </thead>
  );
}
