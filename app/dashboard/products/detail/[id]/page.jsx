"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import DashboardLayout from "@/components/dashboard";
import { GlobalContext } from "@/hooks/useContext";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import InputFile from "@/components/form/inputFile";
export default function Page() {
  const { products, categories, brands } = useContext(GlobalContext);
  const { id } = useParams();
  const [body, setBody] = useState([]);
  const [image, setImage] = useState({ preview: "" });
  const handleChange = (e) => {
    setBody((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const hanldeInputFile = (e) => {
    let images = [];
    let imgData = [];
    for (let i = 0; i < e.target.files.length; i++) {
      images.push(URL.createObjectURL(e.target.files[i]));
      imgData.push(e.target.files[i]);
    }
    if (e.target.files.length) {
      setImage(e.target.files);
    }
  };

  useEffect(() => {
    if (products) {
      setBody((prev) => ({
        ...prev,
        name: products?.name,
        categorieId: products?.categorieId,
        brandId: products?.brandId,
        description: products?.description,
        tag: products?.tag,
        metaDescription: products?.metaDescription,
        metaKeywords: products?.metaKeywords,
        published: products?.published,
      }));
    }
  }, [products]);

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
      formData.append("file", image[key]);
    }
    const res = await fetch(`http://localhost:5000/api/product/${id}`, {
      method: "PUT",
      body: formData,
    });
    const result = await res.json();
    console.log(result);
  };
  return (
    <DashboardLayout>
      {!products ? (
        <p>loading</p>
      ) : (
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <Input
                label="Name"
                name="name"
                type="text"
                onChange={handleChange}
                defaultValue={products?.name}
              />
              <Input
                label="Meta Description"
                name="metaDescription"
                type="text"
                onChange={handleChange}
                defaultValue={products?.metaDescription}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Tags"
                name="tag"
                type="text"
                onChange={handleChange}
                defaultValue={products?.tag}
              />
              <Input
                label="Meta Keywords"
                name="metaKeywords"
                type="text"
                onChange={handleChange}
                defaultValue={products?.metaKeywords}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select
                label="Categorie"
                name="categorieId"
                data={categories}
                onChange={handleChange}
                defaultValue={products?.categorieId}
              />

              <Select
                label="Brand"
                name="brandId"
                data={brands}
                onChange={handleChange}
                defaultValue={products?.brandId}
              />

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Publish
                </label>
                <select
                  htmlFor="published"
                  name="published"
                  className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                  defaultValue={Number(products?.published)}
                  onChange={handleChange}
                >
                  <option disabled>Please select</option>
                  <option value={0}>false</option>
                  <option value={1}>true</option>
                </select>
              </div>
            </div>
            <InputFile
              name="image"
              label="Image"
              onChange={hanldeInputFile}
              preview={image}
            />

            <div>
              <label htmlFor="message">Description</label>
              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="description"
                name="description"
                rows="8"
                id="description"
                onChange={handleChange}
                defaultValue={products?.description}
              ></textarea>
            </div>

            <div className="mt-4">
              <button
                onClick={onSubmit}
                className="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
              >
                Send Enquiry
              </button>
            </div>
          </div>
          <pre> {JSON.stringify(products, null, 2)}</pre>
        </div>
      )}
    </DashboardLayout>
  );
}
