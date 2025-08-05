"use client";
import { useState } from "react";
import { Button, Modal, Input, Form, message, Select } from "antd";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createEmploye } from "@/lib/api";

export default function Create({ accessToken }) {
  const queryClient = useQueryClient();
  const [error, setError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    role: "",
  });
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
      phone: "",
      email: "",
      role: "",
    });
    setError({});
  };

  const { mutate } = useMutation({
    mutationFn: createEmploye,
    onSuccess: () => {
      message.success("employe berhasil dibuat");
      queryClient.invalidateQueries({ queryKey: ["employe"] });
      setIsModalOpen(false);
      resetForm();
    },
    onError: (error) => {
      setError(error.error || {});
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ form, accessToken: accessToken });
  };

  return (
    <div className="mb-3">
      <Button type="primary" onClick={showModal}>
        Add employe
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
            label="phone"
            validateStatus={getFieldError("phone", error) && "error"}
            help={getMessageError("phone", error)}
          >
            <Input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </Form.Item>
          <Form.Item
            label="Email"
            validateStatus={getFieldError("email", error) && "error"}
            help={getMessageError("email", error)}
          >
            <Input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </Form.Item>
          <Form.Item
            label="role"
            validateStatus={getFieldError("role", error) && "error"}
            help={getMessageError("role", error)}
          >
            <Select
              style={{ width: 200 }}
              allowClear
              value={form.published}
              placeholder="Select role"
              options={[
                { value: "marketing", label: "Marketing" },
                { value: "Purchasing", label: "Purchasing" },
                { value: "marketing manager", label: "Marketing Manager" },
              ]}
              onChange={(val) => handleSelectChange("role", val)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
