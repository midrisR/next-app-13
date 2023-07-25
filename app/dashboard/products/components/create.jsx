"use client";
import { useState } from "react";
import Modal from "@/components/modal/modal";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import InputFile from "@/components/form/inputFile";
import Textarea from "@/components/form/textarea";
import { useRouter } from "next/navigation";
export default function Create({ categories, brands, accessToken }) {
  const [body, setBody] = useState([]);
  const [image, setImage] = useState([]);
  const [error, setError] = useState({});
  const router = useRouter();

  const handleChange = (e) => {
    setBody((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSelect = (name, value) => {
    setBody((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const hanldeInputFile = (e) => {
    let imgData = [];
    for (let i = 0; i < e.target.files.length; i++) {
      imgData.push(e.target.files[i]);
    }
    setImage(imgData);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", body.name || "");
    formData.append("categorieId", body.categorieId || "");
    formData.append("description", body.description || "");
    formData.append("brandId", body.brandId || "");
    formData.append("tag", body.tag || "");
    formData.append("metaDescription", body.metaDescription || "");
    formData.append("metaKeywords", body.metaKeywords || "");
    formData.append("published", body.published || "");
    for (const key of Object.keys(image)) {
      formData.append("images", image[key]);
    }
    const res = await fetch("http://localhost:5000/api/product", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: accessToken,
      },
    });
    const result = await res.json();
    if (!result.success) {
      setError(result);
    } else {
      setImage([]);
      router.refresh();
    }
  };
  return (
    <div className="my-4">
      <Modal icon="create product" width="3/6" onSubmit={onSubmit}>
        {typeof error?.error === "string" && (
          <div
            role="alert"
            className="rounded border-s-4 border-red-500 bg-red-50 p-4"
          >
            <div className="flex items-center gap-2 text-red-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                />
              </svg>

              <strong className="block font-medium">{error?.error} </strong>
            </div>
          </div>
        )}
        <div className="flex mt-4 lg:col-span-3">
          <div className="space-y-4  mx-auto">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <Input
                error={error?.error}
                label="Name"
                name="name"
                type="text"
                onChange={handleChange}
              />
              <Input
                error={error?.error}
                label="Meta Description"
                name="metaDescription"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                error={error?.error}
                label="Tags"
                name="tag"
                type="text"
                onChange={handleChange}
              />
              <Input
                error={error?.error}
                label="Meta Keywords"
                name="metaKeywords"
                type="text"
                onChange={handleChange}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select
                error={error?.error}
                label="Categorie"
                name="categorieId"
                data={categories}
                onChange={handleSelect}
                defaultValue=""
              />

              <Select
                error={error?.error}
                label="Brand"
                name="brandId"
                data={brands}
                onChange={handleSelect}
                defaultValue=""
              />

              <div>
                <Select
                  error={error?.error}
                  label="Published"
                  name="published"
                  data={[
                    { id: "0", name: "false" },
                    { id: "1", name: "true" },
                  ]}
                  onChange={handleSelect}
                  defaultValue=""
                />
              </div>
            </div>
            <InputFile
              error={error?.error}
              name="images"
              label="Image"
              onChange={hanldeInputFile}
              preview={image}
            />

            <Textarea
              name="description"
              onChange={handleChange}
              error={error?.error}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
}
