export default function Thead() {
  return (
    <thead className="bg-indigo-100">
      <tr>
        <th className="text-left whitespace-nowrap px-4 py-4 text-indigo-700 font-medium">
          Name
        </th>
        <th className="text-left whitespace-nowrap px-4 py-4 text-indigo-700 font-medium">
          Categorie
        </th>
        <th className="text-left whitespace-nowrap px-4 py-4 text-indigo-700 font-medium">
          Brand
        </th>
        <th className="text-left whitespace-nowrap px-4 py-4 text-indigo-700 font-medium">
          publish
        </th>
        <th className="text-left whitespace-nowrap px-4 py-4 text-indigo-700 font-medium">
          CreatedAt
        </th>
        <th className="text-left whitespace-nowrap px-4 py-4 text-indigo-700 font-medium">
          Action
        </th>
      </tr>
    </thead>
  );
}
