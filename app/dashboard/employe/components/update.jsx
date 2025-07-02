"use client";
import { useState } from "react";
import { Button, Modal, Input, Form, Select, message } from "antd";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getEmployeById, updateEmploye } from "@/lib/api";

export default function Update({ id, accessToken }) {
  const queryClient = useQueryClient();
  const [error, setError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });

  const brandById = useMutation({
    mutationFn: getEmployeById,
    onSuccess: (res) => {
      setForm({
        name: res.name,
        role: res.role,
        email: res.email,
        phone: res.phone,
      });
    },
    onError: (err) => {
      console.error("Failed to fetch client", err);
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
      contact: "",
      email: "",
      address: "",
    });
    setError({});
  };

  const { mutate, isPending } = useMutation({
    mutationFn: updateEmploye,
    onSuccess: () => {
      message.success("Employe update is success");
      queryClient.invalidateQueries({ queryKey: ["employe"] });
      setIsModalOpen(false);
      resetForm();
    },
    onError: (error) => {
      message.error("Employe update is error");
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
            label="Phone"
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
              value={form.role}
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
    </>
  );
}
