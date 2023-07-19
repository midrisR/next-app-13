"use client";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "@/hooks/useContext";
import { useRouter } from "next/navigation";
import { FaEye } from "react-icons/fa6";
import ModalDelete from "../modal/delete";

export default function Tbody({ data }) {
  const { deleteProduct } = useContext(GlobalContext);
  const router = useRouter();

  const handleDelete = (id) => {
    deleteProduct(id);
    router.refresh();
  };

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
            <ModalDelete
              id={val.id}
              handleDelete={() => handleDelete(val.id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
