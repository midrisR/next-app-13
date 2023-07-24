"use client";
import { useParams, useRouter } from "next/navigation";
import { useContext, useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { HiTrash } from "react-icons/hi";
import { GlobalContext } from "@/hooks/useContext";
import DashboardLayout from "@/components/dashboard";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import InputFile from "@/components/form/inputFile";
import Loading from "@/components/loading";
export default function Page() {
  const { data: session, status } = useSession();
  const {
    product,
    categories,
    brands,
    getProductById,
    getCategorie,
    getBrand,
    deleteImage,
  } = useContext(GlobalContext);
  const router = useRouter();
  const { id } = useParams();
  const [body, setBody] = useState([]);
  const [image, setImage] = useState([]);

  const removeImg = async (img) => {
    await deleteImage(img);
  };

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
      headers: {
        Authorization: session?.accessToken,
      },
    });
    const result = await res.json();
    if (result.success) {
      router.push("/dashboard/products");
    }
  };

  return (
    <DashboardLayout>
      {product !== null ? (
        <div className="w-4/6 flex mx-auto mt-12 rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
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
                onChange={handleSelect}
                defaultValue={product?.categorieId}
              />

              <Select
                label="Brand"
                name="brandId"
                data={brands}
                onChange={handleSelect}
                defaultValue={product?.brandId}
              />

              <div>
                {product?.published}
                <Select
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
            <div>
              <label htmlFor="message">Description</label>
              <textarea
                className="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="description"
                name="description"
                rows="8"
                id="description"
                onChange={handleChange}
                value={product.description}
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
