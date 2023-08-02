"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import Modal from "@/components/modal/modal";
const initialState = {
  address: "",
  contact: "",
  email: "",
  name: "",
};

export default function Create({ accessToken }) {
  const [value, setValue] = useState(initialState);
  const [error, setError] = useState();

  const router = useRouter();

  const handleChange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`http://localhost:5000/api/client`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    });

    const result = await res.json();

    if (!result.success) {
      setError(result.error);
    } else {
      setError([]);
      setValue(initialState);
      router.refresh();
    }
    return result;
  };

  return (
    <div className="my-4">
      <Modal onSubmit={onSubmit} icon="create client" width="lg:w-2/6">
        <Input
          error={error}
          label="Name"
          name="name"
          type="text"
          value={value.name}
          onChange={handleChange}
        />
        <Input
          error={error}
          label="Address"
          name="address"
          type="text"
          value={value.address}
          onChange={handleChange}
        />
        <Input
          error={error}
          label="Contact"
          name="contact"
          type="text"
          value={value.contact}
          onChange={handleChange}
        />
        <small className="italic">
          *Note : jika kontak lebih dari satu maka inputkan data seperti
          bertikut : telepon:123456, wa:123456, fax:123456. etc...
        </small>
        <Input
          error={error}
          label="Email"
          name="email"
          type="text"
          value={value.email}
          onChange={handleChange}
        />
        <small className="italic">
          *Note : jika email lebih dari satu maka inputkan data seperti bertikut
          : email : example@mail.com,email : example-1@mail.com. etc...
        </small>
      </Modal>
    </div>
  );
}
