"use client";
import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Select,
  Space,
  Upload,
  message,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ImgCrop from "antd-img-crop";
const { TextArea } = Input;

export default function Create({ categories, brands, accessToken }) {
  const queryClient = useQueryClient();
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
  const [previewImage, setPreviewImage] = useState("");
  const [error, setError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const createProduct = async (formData) => {
    const res = await fetch("https://api.projectme.my.id/apiproduct", {
      method: "POST",
      body: formData,
      headers: {
        Authorization: accessToken,
      },
    });

    const result = await res.json();
    if (!result.success) {
      throw result; // akan ditangkap di onError
    }
    return result;
  };

  const { mutate, isPending } = useMutation({
    mutationFn: createProduct,
    onSuccess: () => {
      message.success("Produk berhasil dibuat");
      queryClient.invalidateQueries({ queryKey: ["allData"] });
      resetForm();
      setIsModalOpen(false);
    },
    onError: (error) => {
      setError(error.error || {});
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    for (const img of images) {
      formData.append("images", img);
    }
    mutate(formData);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Create Product
      </Button>
      <Modal
        onOk={onSubmit}
        open={isModalOpen}
        onCancel={handleOk}
        destroyOnHidden={false}
      >
        {typeof error?.error === "string" && (
          <div
            role="alert"
            className="rounded border-s-4 border-red-500 bg-red-50 p-4 mb-4"
          >
            <div className="flex items-center gap-2 text-red-800">
              <strong className="block font-medium">{error?.error}</strong>
            </div>
          </div>
        )}

        <Form layout="vertical" preserve={false}>
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
                options={brands?.map((b) => ({
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
                options={categories?.map((c) => ({
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
            <TextArea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Enter description"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
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
