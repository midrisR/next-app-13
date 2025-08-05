"use client";
import { useState, useEffect } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Select,
  Space,
  Upload,
  message,
  Typography,
} from "antd";
import { useRouter } from "next/navigation";
import { PlusOutlined } from "@ant-design/icons";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import ImgCrop from "antd-img-crop";
import { getProductById, getBrands, getCategories } from "@/lib/api";
import { useSession } from "next-auth/react";
import Markdown from "@/components/markdown";

const { TextArea } = Input;
const { Title } = Typography;
export default function Update({ params }) {
  const queryClient = useQueryClient();
  const { data: session, status } = useSession();
  const { id } = params;
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    metaDescription: "",
    metaKeywords: "",
    categorieId: "",
    brandId: "",
    published: "",
  });

  const [images, setImages] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [error, setError] = useState({});

  const handelRemoveImage = async (imgId) => {
    const remove = await fetch(`https://api.projectme.my.id/image/${imgId}`, {
      method: "DELETE",
      headers: {
        Authorization: session?.accessToken,
      },
    });
    const res = await remove.json();
    if (res.success) {
      console.log("success");
    }
  };

  const getById = async () => {
    const [products, brands, categories] = await Promise.all([
      getProductById(id),
      getBrands(),
      getCategories(),
    ]);
    return { products, brands, categories };
  };

  const { data, isLoading } = useQuery({
    queryKey: ["getById"], // tambahkan ke queryKey
    queryFn: getById,
    keepPreviousData: true,
  });

  useEffect(() => {
    if (data?.products) {
      const {
        name,
        description,
        metaDescription,
        metaKeywords,
        categorieId,
        brandId,
        published,
        Images,
      } = data.products;
      setForm({
        name: name || "",
        description: description || "",
        metaDescription: metaDescription || "",
        metaKeywords: metaKeywords || "",
        categorieId: categorieId || "",
        brandId: brandId || "",
        published: published ?? "",
      });
      const initialFileList = Images.map((img, index) => ({
        uid: img.id?.toString() || `img-${index}`,
        name: img.name || `image-${index}`,
        status: "done",
        url: `https://api.projectme.my.id/images/item/${id}/${img.name}`,
      }));
      setFileList(initialFileList);
    }
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleEditorChange = ({ html, text }) => {
    setForm((prev) => ({ ...prev, description: text }));
  };

  const handleSelectChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleUploadChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    const files = newFileList.map((file) => file.originFileObj).filter(Boolean);
    setImages(files);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith("image/");
    if (!isImage) {
      message.error("Only image files are allowed!");
    }
    return isImage || Upload.LIST_IGNORE;
  };

  const resetForm = () => {
    setForm({
      name: "",
      description: "",
      metaDescription: "",
      metaKeywords: "",
      categorieId: "",
      brandId: "",
      published: "",
    });
    setImages([]);
    setFileList([]);
    setError({});
  };

  const updateProduct = async (formData) => {
    const res = await fetch(`https://api.projectme.my.id/product/${id}`, {
      method: "PUT",
      body: formData,
      headers: {
        Authorization: session?.accessToken,
      },
    });

    const result = await res.json();
    if (!result.success) {
      throw result; // akan ditangkap di onError
    }
    return result;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: updateProduct,
    onSuccess: () => {
      message.success("Product update is success");
      queryClient.invalidateQueries({ queryKey: ["getById"] });
      resetForm();
      router.push("/dashboard/products");
    },
    onError: (error) => {
      setError(error.error || {});
    },
  });

  const onSubmit = () => {
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    for (const img of images) {
      formData.append("images", img);
    }
    for (const [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }
    mutate(formData);
  };

  return (
    <div className="bg-white rounded p-8">
      <Title>Add new product</Title>
      <div className="w-full">
        <Form layout="vertical" preserve={false} onFinish={onSubmit}>
          <Form.Item
            label="Name"
            validateStatus={getFieldError("name", error) && "error"}
            help={getMessageError("name", error)}
          >
            <Input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </Form.Item>

          <Form.Item
            label="Meta Description"
            validateStatus={getFieldError("metaDescription", error) && "error"}
            help={getMessageError("metaDescription", error)}
          >
            <Input
              name="metaDescription"
              value={form.metaDescription}
              onChange={handleChange}
              placeholder="Meta description"
            />
          </Form.Item>

          <Form.Item
            label="Meta Keywords"
            validateStatus={getFieldError("metaKeywords", error) && "error"}
            help={getMessageError("metaKeywords", error)}
          >
            <Input
              name="metaKeywords"
              value={form.metaKeywords}
              onChange={handleChange}
              placeholder="Meta keywords"
            />
          </Form.Item>

          <Form.Item
            label="Publish"
            validateStatus={getFieldError("published", error) && "error"}
            help={getMessageError("published", error)}
          >
            <Select
              style={{ width: 200 }}
              showSearch
              allowClear
              value={form.published || undefined}
              placeholder="is publish?"
              options={[
                { value: true, label: "true" },
                { value: false, label: "false" },
              ]}
              onChange={(val) => handleSelectChange("published", val)}
            />
          </Form.Item>

          <Space style={{ display: "flex", marginBottom: 16 }}>
            <Form.Item
              label="Brand"
              validateStatus={getFieldError("brandId", error) && "error"}
              help={getMessageError("brandId", error)}
            >
              <Select
                style={{ width: 200 }}
                showSearch
                allowClear
                placeholder="Select brand"
                value={form.brandId || undefined}
                options={data?.brands?.map((b) => ({
                  label: b.name,
                  value: b.id,
                }))}
                onChange={(val) => handleSelectChange("brandId", val)}
              />
            </Form.Item>
            <Form.Item
              label="Categorie"
              validateStatus={getFieldError("categorieId", error) && "error"}
              help={getMessageError("categorieId", error)}
            >
              <Select
                style={{ width: 200 }}
                allowClear
                value={form.categorieId || undefined}
                placeholder="Select category"
                options={data?.categories?.map((c) => ({
                  label: c.name,
                  value: c.id,
                }))}
                onChange={(val) => handleSelectChange("categorieId", val)}
              />
            </Form.Item>
          </Space>

          <Form.Item label="Upload Images">
            <ImgCrop>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleUploadChange}
                beforeUpload={beforeUpload}
                onRemove={(d) => handelRemoveImage(d.uid)}
              >
                {fileList.length >= 8 ? null : (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            </ImgCrop>
            <Modal
              open={previewOpen}
              title="Preview"
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="preview" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </Form.Item>

          <Form.Item
            label="Description"
            validateStatus={getFieldError("description", error) && "error"}
            help={getMessageError("description", error)}
          >
            <Markdown
              value={form.description}
              handleEditorChange={handleEditorChange}
              name="description"
            />
          </Form.Item>
          <Form.Item>
            <Button block htmlType="submit" type="primary">
              Update Product
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

// helper
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
