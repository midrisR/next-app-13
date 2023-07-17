import Link from "next/link";
import { FaEye, FaTrashCan } from "react-icons/fa6";
import { useParams } from "next/navigation";
export default function Tbody({ data, openModal }) {
  const { id } = useParams();
  return (
    <tbody className="divide-y divide-gray-200">
      {data?.map((val, i) => (
        <tr key={i}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {val.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {val.Categorie?.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {val.Brand?.name}
          </td>
          <td className="whitespace-nowrap flex gap-1 px-4 py-2">
            <Link
              href={`/dashboard/products/detail/${val.id}`}
              className="inline-flex items-center rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
            >
              <FaEye />
            </Link>
            <button
              className="inline-flex items-center rounded bg-red-500 px-4 py-2 text-xs font-medium text-white hover:bg-red-600"
              onClick={() => openModal(val.id)}
            >
              <FaTrashCan />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
