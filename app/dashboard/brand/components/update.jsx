"use client";
import { useState } from "react";
import { Button, Modal, Input, Form, Select, message } from "antd";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getBrandById, updateBrand } from "@/lib/api";

export default function Update({ id, accessToken }) {
  const queryClient = useQueryClient();
  const [error, setError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    published: true,
  });

  const brandById = useMutation({
    mutationFn: getBrandById,
    onSuccess: (res) => {
      setForm({
        name: res.name,
        published: res.published,
      });
    },
    onError: (err) => {
      console.error("Failed to fetch user", err);
    },
  });

  const showModal = () => {
    setIsModalOpen((prev) => !prev);
    brandById.mutate(id);
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

  const resetForm = () => {
    setForm({
      name: "",
      published: true,
    });
    setError({});
  };

  const { mutate, isPending } = useMutation({
    mutationFn: updateBrand,
    onSuccess: () => {
      message.success("Brand update is success");
      queryClient.invalidateQueries({ queryKey: ["brand"] });
      setIsModalOpen(false);
      resetForm();
    },
    onError: (error) => {
      message.error("Brand update is error");
      setError(error.error || {});
    },
  });

  const onSubmit = () => {
    mutate({ id, form, accessToken });
  };

  return (
    <>
      <Button size="small" type="primary" onClick={showModal}>
        update
      </Button>

      <Modal open={isModalOpen} onOk={onSubmit} onCancel={closeModal}>
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
        </Form>
      </Modal>
    </>
  );
}
