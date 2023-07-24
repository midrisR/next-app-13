import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import Modal from "@/components/modal/modal";
import ModalDelete from "@/components/modal/delete";
import { FaEye } from "react-icons/fa6";
export default function tbody({ data, accessToken }) {
  const router = useRouter();
  const [value, setValue] = useState([]);

  const handleChange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (name, value) => {
    setValue((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const onSubmit = async (e, id) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/brand/${id}`, {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    });

    const result = await res.json();
    if (result.success) {
      setValue([]);
      router.refresh();
    }
  };
  const deleteBrand = async (id) => {
    await fetch(`http://localhost:5000/api/brand/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: accessToken,
      },
    });
    router.refresh();
  };

  return (
    <tbody className="divide-y divide-gray-200">
      {data?.map((val, i) => (
        <tr key={i}>
          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
            {val.name}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
            {String(val.published)}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
            {val.createdAt}
          </td>

          <td className="whitespace-nowrap flex gap-1 px-4 py-2">
            <Modal
              icon={<FaEye />}
              data={data}
              id={val.id}
              onSubmit={(e) => onSubmit(e, val.id)}
            >
              <div className="mt-2">
                <Input
                  label="Name"
                  name="name"
                  type="text"
                  defaultValue={val.name}
                  onChange={handleChange}
                />

                <Select
                  label="Published"
                  name="published"
                  data={[
                    { id: "0", name: "false" },
                    { id: "1", name: "true" },
                  ]}
                  onChange={handleSelect}
                  defaultValue={
                    value?.published || String(Number(val.published))
                  }
                />
              </div>
            </Modal>
            <ModalDelete handleDelete={() => deleteBrand(val.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
