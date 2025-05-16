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
  const [error, setError] = useState({});
  const [preview, setPreview] = useState([]);

  const nameRef = useRef("");
  const publishedRef = useRef("");
  const imageRef = useRef("");

  const hanldeInputFile = (e) => {
    const imgData = [];
    for (let i = 0; i < e.target.files.length; i++) {
      imgData.push(e.target.files[i]);
    }
    setPreview(imgData);
  };

  const onSubmit = async (e, id) => {
    e.preventDefault();
    const img = imageRef.current.files;

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("published", publishedRef.current.value);
    for (const key of Object.keys(img)) {
      formData.append("images", img[key]);
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
      setError({});
      setPreview();
      router.refresh();
    } else {
      setError(result.error);
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
              icon="view"
              data={data}
              id={val.id}
              onSubmit={(e) => onSubmit(e, val.id)}
            >
              <div className="mt-2">
                <Input
                  inputRef={nameRef}
                  error={error}
                  label="Name"
                  name="name"
                  type="text"
                  defaultValue={val.name}
                  onChange={(e) => (nameRef.current.value = e.target.value)}
                />

                <Select
                  error={error}
                  label="Published"
                  name="published"
                  defaultValue={String(Number(val.published))}
                  data={[
                    { id: "0", name: "false" },
                    { id: "1", name: "true" },
                  ]}
                  onChange={(data) => (publishedRef.current.value = data)}
                  inputRef={publishedRef}
                />

                <InputFile
                  error={error}
                  name="images"
                  label="Image"
                  onChange={hanldeInputFile}
                  preview={preview}
                  inputRef={imageRef}
                />
                <img
                  key={i}
                  src={`http://localhost:5000/images/categories/${val.id}/${val.image}`}
                  alt="dummy"
                  width={100}
                />
              </div>
            </Modal>
            <ModalDelete handleDelete={() => deleteCategorie(val.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
