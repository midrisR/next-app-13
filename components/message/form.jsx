"use client";
import { useState } from "react";
import { Button, Input, Form, message } from "antd";
import { getFieldError, getMessageError } from "@/components/form/error";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createQuestion } from "@/lib/api";
const { TextArea } = Input;
import { useSession } from "next-auth/react";
export default function Create({ setIsOpen }) {
  const { data: session } = useSession();
  const queryClient = useQueryClient();
  const [error, setError] = useState({});

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    setError({});
  };

  const { mutate } = useMutation({
    mutationFn: createQuestion,
    onSuccess: () => {
      message.success("message berhasil dibuat");
      queryClient.invalidateQueries({ queryKey: ["message"] });
      setIsOpen(false);
      resetForm();
    },
    onError: (error) => {
      console.log(error);

      setError(error.error || {});
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();
    mutate({ form, accessToken: session?.accessToken });
  };

  return (
    <Form layout="vertical" preserve={false}>
      <Form.Item
        label="Name"
        className="mb-2"
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
        className="mb-2"
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
        className="mb-2"
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
        className="mb-2"
        label="message"
        validateStatus={getFieldError("message", error) && "error"}
        help={getMessageError("message", error)}
      >
        <TextArea
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Enter question"
        />
      </Form.Item>
      <Form.Item>
        <Button block type="primary" onClick={onSubmit} className="mt-2">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
