import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import InputFile from "@/components/form/inputFile";
import Select from "@/components/form/select";
import Modal from "@/components/modal/modal";
import ModalDelete from "@/components/modal/delete";
import { FaEye } from "react-icons/fa6";
export default function tbody({ data, accessToken }) {
  const router = useRouter();
  const [value, setValue] = useState([]);
  const [image, setImage] = useState([]);

  const ref = useRef();

  const hanldeInputFile = (e) => {
    setImage([e.target.files[0]]);
  };

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
    const filter = data.find(({ id }) => id === id);

    const formData = new FormData();
    formData.append("name", value.name || filter.name);
    formData.append("published", value.published || filter.published);

    for (const key of Object.keys(image)) {
      formData.append("images", image[key]);
    }

    const res = await fetch(`http://localhost:5000/api/categorie/${id}`, {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: accessToken,
      },
    });

    const result = await res.json();
    if (result.success) {
      setValue([]);
      setImage([]);
      ref.current.value = "";
      router.refresh();
    }
    return result;
  };
  const deleteCategorie = async (id) => {
    await fetch(`http://localhost:5000/api/categorie/${id}`, {
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
                <InputFile
                  label="Image"
                  name="images"
                  curref={ref}
                  onChange={hanldeInputFile}
                  preview={image}
                />
                {image.length < 1 && (
                  <img
                    key={i}
                    src={`http://localhost:5000/images/categories/${val.id}/${val.image}`}
                    alt="dummy"
                    width={100}
                    height={100}
                  />
                )}
              </div>
            </Modal>
            <ModalDelete handleDelete={() => deleteCategorie(val.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
