"use client";
import { useState } from "react";
import { Button, Modal, Input, Form, message } from "antd";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createClient } from "@/lib/api";

export default function Create({ accessToken }) {
  const queryClient = useQueryClient();
  const [error, setError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    address: "",
  });
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    resetForm();
    setIsModalOpen(false);
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

  const { mutate } = useMutation({
    mutationFn: createClient,
    onSuccess: () => {
      message.success("Brand berhasil dibuat");
      queryClient.invalidateQueries({ queryKey: ["client"] });
      resetForm();
      setIsModalOpen(false);
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
        Create client
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
            label="Contact"
            validateStatus={getFieldError("contact", error) && "error"}
            help={getMessageError("contact", error)}
          >
            <Input
              name="contact"
              value={form.contact}
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
            label="Address"
            validateStatus={getFieldError("address", error) && "error"}
            help={getMessageError("address", error)}
          >
            <Input
              name="address"
              value={form.address}
              onChange={handleChange}
              placeholder="Enter product name"
            />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
