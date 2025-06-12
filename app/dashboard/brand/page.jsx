"use client";
import { useState } from "react";
import {
  Button,
  Modal,
  Input,
  Form,
  Select,
  message,
  Table,
  Tag,
  Flex,
} from "antd";
import { useSession } from "next-auth/react";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { getBrands, deleteBrand, createBrand } from "@/lib/api";
import ModalDelete from "@/components/modal/delete";
import Update from "./components/update";
export default function Brand() {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const [error, setError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [form, setForm] = useState({
    name: "",
    published: true,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["brand"], // tambahkan ke queryKey
    queryFn: getBrands,
    keepPreviousData: true,
  });

  const { mutate: removeBanner } = useMutation({
    mutationFn: ({ id, accessToken }) => deleteBrand({ id, accessToken }),
    onSuccess: () => {
      message.success("brand berhasil dihapus");
      queryClient.invalidateQueries({ queryKey: ["brand"] });
      setIsModalOpen(false);
      resetForm();
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
              removeBanner({
                id: record.id,
                accessToken: session?.accessToken,
              })
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleCancel = () => {
    resetForm();
    setIsModalOpen(false);
  };

  const resetForm = () => {
    setForm({
      name: "",
      published: true,
    });
    setError({});
  };

  const { mutate } = useMutation({
    mutationFn: createBrand,
    onSuccess: () => {
      message.success("Brand berhasil dibuat");
      queryClient.invalidateQueries({ queryKey: ["brand"] });
      resetForm();
      setIsModalOpen(false);
    },
    onError: (error) => {
      setError(error.error || {});
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ form, accessToken: session?.accessToken });
  };

  return (
    <div className="bg-white rounded p-8">
      <Button type="primary" onClick={showModal}>
        Create Brand
      </Button>
      <Modal onOk={onSubmit} open={isModalOpen} onCancel={handleCancel}>
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
