"use client";
import Link from "next/link";
import { useContext } from "react";
import { GlobalContext } from "@/hooks/useContext";
import { useRouter } from "next/navigation";
import ModalDelete from "@/components/modal/delete";

export default function Tbody({ data, accessToken }) {
  const { deleteProduct } = useContext(GlobalContext);

  const router = useRouter();

  const removeProduct = (id) => {
    deleteProduct(id, accessToken);
    router.refresh();
  };

  return (
    <tbody className="divide-y divide-gray-200">
      {data?.map(({ id, name, Brand, Categorie, createdAt, published }) => (
        <tr key={id}>
          <td className="whitespace-nowrap px-4 py-2  text-gray-700">{name}</td>
          <td className="whitespace-nowrap px-4 py-2  text-gray-700">
            {Categorie?.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2  text-gray-700">
            {Brand?.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2  text-gray-700">
            {String(published)}
          </td>
          <td className="whitespace-nowrap px-4 py-2  text-gray-700">
            {createdAt}
          </td>
          <td className="whitespace-nowrap flex gap-1 px-4 py-2">
            <Link
              href={`/dashboard/products/detail/${id}`}
              className="h-8 whitespace-nowrap justify-center rounded-full px-3 py-1 text-sm font-medium text-indigo-500 hover:text-white border border-slate-200 shadow-sm hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 transition-colors group"
            >
              view
            </Link>
            <ModalDelete handleDelete={() => removeProduct(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
