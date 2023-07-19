import React from "react";
import Modal from "@/components/modal/modal";
import ModalDelete from "@/components/modal/delete";
export default function tbody({ data }) {
  return (
    <tbody className="divide-y divide-gray-200">
      {data?.map((val, i) => (
        <tr key={i}>
          <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
            {val.name}
          </td>

          <td className="whitespace-nowrap flex gap-1 px-4 py-2">
            <Modal data={data} id={val.id} />
            <ModalDelete id={val.id} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
