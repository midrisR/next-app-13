"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import InputFile from "@/components/form/inputFile";
import Textarea from "@/components/form/textarea";
import { HiTrash } from "react-icons/hi";
export default function Update({
  productId,
  product,
  categories,
  brands,
  accessToken,
}) {
  const router = useRouter();
  const { id, Images, ...rest } = product;
  const [body, setBody] = useState([]);
  const [image, setImage] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    for (const key in rest) {
      const value = rest[key];
      setBody((prev) => ({
        ...prev,
        [key]: value,
      }));
    }
  }, []);

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
    formData.append("name", body.name);
    formData.append("categorieId", body.categorieId);
    formData.append("description", body.description);
    formData.append("brandId", body.brandId);
    formData.append("tag", body.tag);
    formData.append("metaDescription", body.metaDescription);
    formData.append("metaKeywords", body.metaKeywords);
    formData.append("published", body.published);
    for (const key of Object.keys(image)) {
      formData.append("images", image[key]);
    }
    const res = await fetch(`http://localhost:5000/api/product/${productId}`, {
      method: "PUT",
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
      router.push("/dashboard/products");
    }
  };

  const removeImg = async (id) => {
    const remove = await fetch(`http://localhost:5000/api/image/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: accessToken,
      },
    });
    const res = await remove.json();
    if (res.success) {
      setImage([]);
      router.refresh();
    }
  };

  return (
    <div>
      <div className="w-4/6 flex mx-auto mt-12 rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <div className="space-y-4 mx-auto">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <Input
              error={error?.error}
              label="Name"
              name="name"
              type="text"
              onChange={handleChange}
              defaultValue={product.name}
            />
            <Input
              error={error?.error}
              label="Meta Description"
              name="metaDescription"
              type="text"
              onChange={handleChange}
              defaultValue={product.metaDescription}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              error={error?.error}
              label="Tags"
              name="tag"
              type="text"
              onChange={handleChange}
              defaultValue={product.tag}
            />
            <Input
              error={error?.error}
              label="Meta Keywords"
              name="metaKeywords"
              type="text"
              onChange={handleChange}
              defaultValue={product.metaKeywords}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <Select
              error={error?.error}
              label="Categorie"
              name="categorieId"
              data={categories}
              onChange={handleSelect}
              defaultValue={product?.categorieId}
            />

            <Select
              error={error?.error}
              label="Brand"
              name="brandId"
              data={brands}
              onChange={handleSelect}
              defaultValue={product?.brandId}
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
                defaultValue={String(Number(product?.published))}
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
          <div className="flex gap-4">
            {Images.map(({ id, name }) => (
              <div className="flex" key={id}>
                <img
                  key={name}
                  src={` http://localhost:5000/images/item/${product.id}/${name}`}
                  width={140}
                />
                <HiTrash
                  className="text-red-500 cursor-pointer"
                  size="22"
                  onClick={() => removeImg(id)}
                />
              </div>
            ))}
          </div>
          <Textarea
            className="w-full rounded-lg border-gray-200 p-3 text-sm"
            placeholder="description"
            name="description"
            rows="8"
            id="description"
            onChange={handleChange}
            defaultValue={product.description}
          />
          <div className="mt-4">
            <button
              onClick={onSubmit}
              className="inline-flex w-1/4 justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
