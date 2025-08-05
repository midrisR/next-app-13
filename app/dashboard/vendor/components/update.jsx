"use client";
import { useState } from "react";
import { Button, Modal, Input, Form, message } from "antd";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getVendorById, updateVendor } from "@/lib/api";

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
    mutationFn: getVendorById,
    onSuccess: (res) => {
      setForm({
        name: res.name,
        contact: res.contact,
        email: res.email,
        address: res.address,
      });
    },
    onError: (err) => {
      console.error("Failed to fetch vendor", err);
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
    mutationFn: updateVendor,
    onSuccess: () => {
      message.success("Vendor update is success");
      queryClient.invalidateQueries({ queryKey: ["vendor"] });
      setIsModalOpen(false);
      resetForm();
    },
    onError: (error) => {
      message.error("Vendor update is error");
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
    </>
  );
}
