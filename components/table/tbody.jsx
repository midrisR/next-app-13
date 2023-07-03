import Link from "next/link";
export default function Tbody({ data, renderPageLink }) {
  return (
    <tbody className="divide-y divide-gray-200">
      {data?.map((val, i) => (
        <tr key={i}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {val.id}
          </td>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {val.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {val.Categorie?.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2">
            <Link
              href={renderPageLink(val.id)}
              className="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              View
            </Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
