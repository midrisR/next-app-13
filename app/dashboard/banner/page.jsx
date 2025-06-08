"use client";
import { useState } from "react";
import Image from "next/image";
import {
  Button,
  Modal,
  Input,
  Form,
  Select,
  Upload,
  message,
  Spin,
  Table,
  Tag,
  Flex,
} from "antd";
import { useSession } from "next-auth/react";
import { PlusOutlined } from "@ant-design/icons";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import ImgCrop from "antd-img-crop";
import { getBanner } from "@/lib/api";
export default function Banner() {
  const { data: session, status } = useSession();
  const queryClient = useQueryClient();

  const [error, setError] = useState({});
  const [images, setImages] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    published: "",
  });

  const { data, isLoading } = useQuery({
    queryKey: ["banner"], // tambahkan ke queryKey
    queryFn: getBanner,
    keepPreviousData: true,
  });

  const columns = [
    {
      title: "Information",
      dataIndex: "information",
      key: "information",
    },
    {
      title: "Image",
      dataIndex: "images",
      key: "images",
      render: (_, record) => (
        <Image
          src={`http://localhost:5000/images/banner/${record.id}/${record.images}`}
          width={100}
          height={110}
        />
      ),
    },
    {
      title: "Published",
      dataIndex: "published",
      key: "published",
      render: (_, { published }) => (
        <Tag color={published ? "green" : "red"} key={published}>
          {published ? "True" : "Disable"}
        </Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => <Flex gap="small"></Flex>,
    },
  ];

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    resetForm();
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
      published: "",
    });
    setImages([]);
    setFileList([]);
    setError({});
  };

  const cretaeCategorie = async (formData) => {
    const res = await fetch("http://localhost:5000/api/categorie", {
      method: "POST",
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
    mutationFn: cretaeCategorie,
    onSuccess: () => {
      message.success("Produk berhasil dibuat");
      queryClient.invalidateQueries({ queryKey: ["categorie"] });
      resetForm();
    },
    onError: (error) => {
      // message.error("Gagal membuat produk");
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
    <div className="bg-white rounded p-8">
      <Button type="primary" onClick={showModal}>
        Create Banner
      </Button>
      <Modal onOk={onSubmit} open={isModalOpen} onCancel={handleOk}>
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
            label="Publish"
            validateStatus={getFieldError("published", error) && "error"}
            help={getMessageError("published", error)}
          >
            <Select
              style={{ width: 200 }}
              allowClear
              defaultValue={true}
              options={[
                { value: true, label: "true" },
                { value: false, label: "false" },
              ]}
              onChange={(val) => handleSelectChange("published", val)}
            />
          </Form.Item>
          <Form.Item label="Upload Images">
            <ImgCrop destroyOnHidden={true}>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onPreview={handlePreview}
                onChange={handleUploadChange}
                beforeUpload={beforeUpload}
              >
                {fileList.length === 1 ? null : (
                  <div>
                    <PlusOutlined />
                    <div style={{ marginTop: 8 }}>Upload</div>
                  </div>
                )}
              </Upload>
            </ImgCrop>
            <Modal
              destroyOnHidden={true}
              open={previewOpen}
              title="Preview"
              footer={null}
              onCancel={handleCancel}
            >
              <img alt="preview" style={{ width: "100%" }} src={previewImage} />
            </Modal>
          </Form.Item>
        </Form>
      </Modal>
      <div>
        {isLoading ? (
          <Spin tip="Loading..." />
        ) : (
          <>
            <Table
              columns={columns}
              dataSource={data || []}
              loading={isLoading}
              rowKey="id"
              pagination={{
                position: ["bottomCenter"],
                pageSize: 10,
              }}
              onRow={() => {
                return {
                  className: "hover:bg-gray-100 text-sm lowercase",
                };
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
