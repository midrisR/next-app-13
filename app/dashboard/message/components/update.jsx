"use client";
import { useState } from "react";
import { Button, Modal, Input, Form } from "antd";
import { useMutation } from "@tanstack/react-query";
import { getQuestionById } from "@/lib/api";
const { TextArea } = Input;
export default function Update({ id }) {
  const [error, setError] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const brandById = useMutation({
    mutationFn: getQuestionById,
    onSuccess: (res) => {
      setForm({
        name: res.name,
        message: res.message,
        email: res.email,
        phone: res.phone,
      });
    },
    onError: (err) => {
      console.error("Failed to fetch message", err);
    },
  });

  const showModal = () => {
    setIsModalOpen((prev) => !prev);
    brandById.mutate(id);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button size="small" type="primary" onClick={showModal}>
        show
      </Button>

      <Modal open={isModalOpen} onCancel={closeModal} footer={false}>
        <Form layout="vertical" disabled={true} preserve={false}>
          <Form.Item label="Name">
            <Input
              name="name"
              value={form.name}
              placeholder="Enter product name"
              className="!text-gray-900"
            />
          </Form.Item>
          <Form.Item label="Phone">
            <Input
              name="phone"
              value={form.phone}
              placeholder="Enter product name"
              className="!text-gray-900"
            />
          </Form.Item>
          <Form.Item label="Email">
            <Input
              name="email"
              value={form.email}
              placeholder="Enter product name"
              className="!text-gray-900"
            />
          </Form.Item>
          <Form.Item label="message">
            <TextArea
              name="message"
              value={form.message}
              placeholder="Enter product name"
              className="!text-gray-900"
            />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
