"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import Select from "@/components/form/select";

export default function Create({ accessToken }) {
  const [value, setValue] = useState([]);

  const router = useRouter();

  const handleChange = (e) => {
    setValue((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelect = (name, value) => {
    setValue((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:5000/api/brand`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    });

    const result = await res.json();

    if (result.success) {
      setValue([]);
      router.refresh();
    }
  };
  return (
    <div className="w-2/6 bg-white rounded-md shadow-xl px-12">
      <p className="font-semibold text-2xl text-center text-slate-800 px-4 mt-12">
        Create brand
      </p>
      <div className="mt-12">
        <Input
          label="Name"
          name="name"
          type="text"
          onChange={handleChange}
          value={value?.name || ""}
        />
        <Select
          label="Published"
          name="published"
          data={[
            { id: "0", name: "false" },
            { id: "1", name: "true" },
          ]}
          onChange={handleSelect}
          defaultValue=""
        />
        <button
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 mt-4"
          onClick={onSubmit}
        >
          submit
        </button>
      </div>
    </div>
  );
}
