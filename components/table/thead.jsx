export default function Thead() {
  return (
    <thead className="ltr:text-left rtl:text-right">
      <tr>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-gray-900">
          #
        </th>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-gray-900">
          Name
        </th>
        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-gray-900">
          Categorie
        </th>

        <th className="text-left font-semibold whitespace-nowrap px-4 py-2  text-gray-900">
          Action
        </th>
      </tr>
    </thead>
  );
}
