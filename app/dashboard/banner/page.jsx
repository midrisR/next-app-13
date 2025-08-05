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
  Table,
  Tag,
  Flex,
} from "antd";
import { useSession } from "next-auth/react";
import { PlusOutlined } from "@ant-design/icons";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { getBanner, deleteBanner, createBanner } from "@/lib/api";
import ModalDelete from "@/components/modal/delete";
import Update from "./components/update";
export default function Banner() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const [error, setError] = useState({});
  const [images, setImages] = useState([]);
  const [fileList, setFileList] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [perPage, setPerPage] = useState(3);
  const [form, setForm] = useState({
    name: "",
    published: true,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["banner"], // tambahkan ke queryKey
    queryFn: getBanner,
    keepPreviousData: true,
  });

  const { mutate: removeBanner } = useMutation({
    mutationFn: ({ id, token }) => deleteBanner(id, token),
    onSuccess: () => {
      message.success("banner berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["banner"] });
    },
    onError: (error) => {
      console.log(error.message);
    },
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "images",
      render: (_, record) => (
        <Image
          src={`https://api.projectme.my.id/images/banner/${record.id}/${record.image}`}
          alt="Gambar"
          width={300}
          height={0}
          style={{ width: "120", height: "110" }}
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
      render: (_, record) => (
        <Flex gap="small">
          <ModalDelete
            handleDelete={() =>
              removeBanner({ id: record.id, token: session?.accessToken })
            }
          />
          <Update id={record.id} accessToken={session?.accessToken} />
        </Flex>
      ),
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
      published: true,
    });
    setImages([]);
    setFileList([]);
    setError({});
  };

  const { mutate } = useMutation({
    mutationFn: createBanner,
    onSuccess: () => {
      message.success("Banner berhasil dibuat");
      queryClient.invalidateQueries({ queryKey: ["banner"] });
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
    mutate({ formData, accessToken: session?.accessToken });
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
          <Form.Item
            label="Upload Images"
            validateStatus={getFieldError("image", error) && "error"}
            help={getMessageError("image", error)}
          >
            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleUploadChange}
              beforeUpload={beforeUpload}
              className={getFieldError("image", error) && "border-red-500"}
            >
              {fileList.length === 1 ? null : (
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
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
        <Table
          columns={columns}
          dataSource={data || []}
          loading={isLoading}
          rowKey="id"
          pagination={{
            showSizeChanger: true,
            pageSizeOptions: ["5", "10", "20"],
            position: ["bottomCenter"],
            pageSize: perPage,
            onChange: (newPage, newPageSize) => {
              setPerPage(newPageSize);
            },
          }}
          onRow={() => {
            return {
              className: "hover:bg-gray-100 text-sm lowercase",
            };
          }}
        />
      </div>
    </div>
  );
}
