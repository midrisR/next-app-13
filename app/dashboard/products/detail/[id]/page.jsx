"use client";
import { useParams, useRouter } from "next/navigation";
import { useContext, useState, useEffect, useCallback } from "react";
import DashboardLayout from "@/components/dashboard";
import { GlobalContext } from "@/hooks/useContext";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import InputFile from "@/components/form/inputFile";
import { useSession } from "next-auth/react";
import Loading from "@/components/loading";
import { HiTrash } from "react-icons/hi";
export default function Page() {
  const { data: session, status } = useSession();
  const {
    product,
    categories,
    brands,
    getProductById,
    getCategorie,
    getBrand,
  } = useContext(GlobalContext);
  const router = useRouter();
  const { id } = useParams();
  const [body, setBody] = useState([]);
  const [image, setImage] = useState([]);

  useEffect(() => {
    if (status === "authenticated") {
      getProductById(id);
      getCategorie();
      getBrand();
    }
  }, [status]);

  const handleChange = (e) => {
    setBody((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };
  const handleSelec = (name, value) => {
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

  useEffect(() => {
    if (product) {
      setBody((prev) => ({
        ...prev,
        name: product?.name,
        categorieId: product?.categorieId,
        brandId: product?.brandId,
        description: product?.description,
        tag: product?.tag,
        metaDescription: product?.metaDescription,
        metaKeywords: product?.metaKeywords,
        published: product?.published,
      }));
    }
  }, [product]);

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
    const res = await fetch(`http://localhost:5000/api/product/${id}`, {
      method: "PUT",
      body: formData,
    });
    const result = await res.json();
    if (result.success) {
      router.push("/dashboard/products");
    }
  };

  return (
    <DashboardLayout>
      {product !== null ? (
        <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
              <Input
                label="Name"
                name="name"
                type="text"
                onChange={handleChange}
                defaultValue={product.name}
              />
              <Input
                label="Meta Description"
                name="metaDescription"
                type="text"
                onChange={handleChange}
                defaultValue={product.metaDescription}
              />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input
                label="Tags"
                name="tag"
                type="text"
                onChange={handleChange}
                defaultValue={product.tag}
              />
              <Input
                label="Meta Keywords"
                name="metaKeywords"
                type="text"
                onChange={handleChange}
                defaultValue={product.metaKeywords}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <Select
                label="Categorie"
                name="categorieId"
                data={categories}
                onChange={handleSelec}
                defaultValue={product?.categorieId}
              />

              <Select
                label="Brand"
                name="brandId"
                data={brands}
                onChange={handleSelec}
                defaultValue={product?.brandId}
              />

              <div>
                <label className="block text-sm font-medium text-gray-900">
                  Publish
                </label>
                <select
                  htmlFor="published"
                  name="published"
                  className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
                  defaultValue={Number(product.published)}
                  onChange={handleSelec}
                >
                  <option disabled>Please select</option>
                  <option value={0}>false</option>
                  <option value={1}>true</option>
                </select>
              </div>
            </div>
            <InputFile
              name="images"
              label="Image"
              onChange={hanldeInputFile}
              preview={image}
            />
            <div className="flex gap-4">
              {product.Images.map(({ id, name }) => (
                <div className="flex" key={id}>
                  <img
                    key={name}
                    src={` http://localhost:5000/images/${product.id}/${name}`}
                    width={140}
                  />
                  <HiTrash className="text-red-500 cursor-pointer" size="22" />
                </div>
              ))}
            </div>
            {JSON.stringify(product.Images, null, 2)}
            <div>
              <label htmlFor="message">Description</label>
              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="description"
                name="description"
                rows="8"
                id="description"
                onChange={handleChange}
                defaultValue={product.description}
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
        </div>
      ) : (
        <Loading />
      )}
    </DashboardLayout>
  );
}
