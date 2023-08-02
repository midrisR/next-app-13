"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import InputFile from "@/components/form/inputFile";
import Select from "@/components/form/select";
import Modal from "@/components/modal/modal";
export default function Create({ accessToken }) {
  const [error, setError] = useState({});
  const [preview, setPreview] = useState("");

  const router = useRouter("");
  const imageRef = useRef("");
  const nameRef = useRef("");
  const publishedRef = useRef("");

  const handleInputFile = (e) => {
    const imgData = [];
    imgData.push(e.target.files[0]);
    setPreview(imgData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const img = imageRef.current.files;

    const formData = new FormData();
    formData.append("name", nameRef.current.value);
    formData.append("published", publishedRef.current.value);
    for (const key of Object.keys(img)) {
      formData.append("images", img[key]);
    }
    const res = await fetch(`http://localhost:5000/api/categorie`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: accessToken,
      },
    });

    const result = await res.json();

    if (result.success) {
      publishedRef.current.value = "";
      imageRef.current.value = "";
      nameRef.current.value = "";
      setPreview("");
      setError({});
      router.refresh();
    } else {
      setError(result.error);
    }
    return result;
  };
  return (
    <div className="my-4">
      <Modal onSubmit={onSubmit} icon="Create categorie" width="lg:w-2/6">
        <Input
          error={error}
          inputRef={nameRef}
          label="Name"
          name="name"
          type="text"
          onChange={(e) => (nameRef.current.value = e.target.value)}
        />
        <Select
          error={error}
          inputRef={publishedRef}
          label="Published"
          name="published"
          data={[
            { id: "0", name: "false" },
            { id: "1", name: "true" },
          ]}
          onChange={(data) => (publishedRef.current.value = data)}
        />
        <InputFile
          error={error}
          label="Image"
          name="images"
          inputRef={imageRef}
          preview={preview}
          onChange={handleInputFile}
        />
      </Modal>
    </div>
  );
}
