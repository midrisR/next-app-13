"use client";
import { useState, useEffect } from "react";
import { Button, Modal, Input, Form, Select, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import ImgCrop from "antd-img-crop";
import { updateCategorie, getCategoriesById } from "@/lib/api";
import { useSession } from "next-auth/react";
const { TextArea } = Input;

export default function Update({ id }) {
  const queryClient = useQueryClient();
  const { data: session, status } = useSession();
  const [form, setForm] = useState({
    name: "",
    published: true,
  });

  const [images, setImages] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [error, setError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categoryById = useMutation({
    mutationFn: getCategoriesById,
    onSuccess: (res) => {
      setForm({
        name: res.name,
        published: res.published,
      });

      setFileList([
        {
          uid: res.id?.toString() || `img-${id}`,
          name: res.name || `image-${id}`,
          status: "done",
          url: `https://api.projectme.my.id/images/categories/${id}/${res.image}`,
        },
      ]);
    },
    onError: (err) => {
      console.error("Failed to fetch user", err);
    },
  });

  const showModal = () => {
    setIsModalOpen((prev) => !prev);
    categoryById.mutate(id);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

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
      published: true,
    });
    setImages([]);
    setFileList([]);
    setError({});
  };

  const upCat = async (formData) => {
    const res = await fetch(`https://api.projectme.my.id/categorie/${id}`, {
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
    mutationFn: updateCategorie,
    onSuccess: () => {
      message.success("Categorie update is success");
      queryClient.invalidateQueries({ queryKey: ["categorie"] });
      resetForm();
      setIsModalOpen(false);
    },
    onError: (error) => {
      message.error("Categorie update is error");
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
    mutate({ formData, id, accessToken: session?.accessToken });
  };

  return (
    <>
      <Button size="small" type="primary" onClick={showModal}>
        update
      </Button>

      <Modal open={isModalOpen} onCancel={closeModal} footer={null}>
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
            label="Publish"
            validateStatus={getFieldError("published", error) && "error"}
            help={getMessageError("published", error)}
          >
            <Select
              style={{ width: 200 }}
              showSearch
              allowClear
              value={form.published}
              placeholder="is publish?"
              options={[
                { value: true, label: "true" },
                { value: false, label: "false" },
              ]}
              onChange={(val) => handleSelectChange("published", val)}
            />
          </Form.Item>

          <Form.Item label="Upload Images">
            <ImgCrop>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleUploadChange}
                beforeUpload={beforeUpload}
              >
                {fileList.length >= 2 ? null : (
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
          <Form.Item>
            <Button block htmlType="submit" type="primary">
              Update Product
            </Button>
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
