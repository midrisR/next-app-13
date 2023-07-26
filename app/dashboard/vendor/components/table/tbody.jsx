import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import Modal from "@/components/modal/modal";
import ModalDelete from "@/components/modal/delete";
import { FaEye } from "react-icons/fa6";
export default function tbody({ data, accessToken }) {
  const router = useRouter();
  const [value, setValue] = useState([]);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e, id) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/vendor/${id}`, {
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
      setSuccess(true);
      setError({});
      router.refresh();
    } else {
      setError(success);
    }
    return result;
  };
  const deleteVendor = async (id) => {
    await fetch(`http://localhost:5000/api/vendor/${id}`, {
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
            {val.address}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
            {val.contact}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
            {val.email}
          </td>

          <td className="whitespace-nowrap flex gap-1 px-4 py-2">
            <Modal
              success={success}
              icon={<FaEye />}
              data={data}
              id={val.id}
              width={"w-1/4"}
              onSubmit={(e) => onSubmit(e, val.id)}
            >
              <div className="mt-2">
                <Input
                  error={error?.error}
                  label="Name"
                  name="name"
                  type="text"
                  defaultValue={val.name}
                  onChange={handleChange}
                />
                <Input
                  error={error?.error}
                  label="Address"
                  name="address"
                  type="text"
                  defaultValue={val.address}
                  onChange={handleChange}
                />
                <Input
                  error={error?.error}
                  label="Contact"
                  name="contact"
                  type="text"
                  defaultValue={val.contact}
                  onChange={handleChange}
                />
                <Input
                  error={error?.error}
                  label="Email"
                  name="email"
                  type="text"
                  defaultValue={val.email}
                  onChange={handleChange}
                />
              </div>
            </Modal>
            <ModalDelete handleDelete={() => deleteVendor(val.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
