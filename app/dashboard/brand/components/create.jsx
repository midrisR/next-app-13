"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import Modal from "@/components/modal/modal";
export default function Create({ accessToken }) {
  const [error, setError] = useState({});
  const router = useRouter();
  const nameRef = useRef("");
  const publishedRef = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/brand`, {
      method: "POST",
      body: JSON.stringify({
        name: nameRef.current.value,
        published: publishedRef.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    });

    const result = await res.json();

    if (!result.success) {
      setError(result.error);
    } else {
      nameRef.current.value = "";
      publishedRef.current.value = "";
      router.refresh();
    }
    return result;
  };
  return (
    <div className="my-4">
      <Modal onSubmit={onSubmit} icon="Create brand" width="lg:w-2/6">
        <Input
          error={error}
          inputRef={nameRef}
          label="Name"
          name="name"
          type="text"
          onChange={(e) => (nameRef.current.value = e.target.value)}
        />
        <Select
          error={error}
          inputRef={publishedRef}
          label="Published"
          name="published"
          data={[
            { id: "0", name: "false" },
            { id: "1", name: "true" },
          ]}
          onChange={(data) => (publishedRef.current.value = data)}
        />
      </Modal>
    </div>
  );
}
