"use client";
import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import Select from "@/components/form/select";
import InputDate from "@/components/form/inputDate";
import Modal from "@/components/modal/modal";

export default function Create({ accessToken, vendors }) {
  const [error, setError] = useState();

  const router = useRouter();

  const productRef = useRef("");
  const vendorIdRef = useRef("");
  const priceRef = useRef("");
  const dateRef = useRef("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://api.projectme.my.id/apioffers`, {
      method: "POST",
      body: JSON.stringify({
        product: productRef.current.value,
        vendorId: vendorIdRef.current.value,
        price: priceRef.current.value,
        date: dateRef.current.value,
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
      setError([]);
      productRef.current.value = "";
      vendorIdRef.current.value = "";
      priceRef.current.value = "";
      dateRef.current.value = "";
      router.refresh();
    }
    return result;
  };

  return (
    <div className="my-4">
      <Modal onSubmit={onSubmit} icon="create offers" width="lg:w-2/6">
        <Input
          inputRef={productRef}
          error={error}
          label="Product"
          name="product"
          type="text"
          onChange={(e) => (productRef.current.value = e.target.value)}
        />
        <Input
          inputRef={priceRef}
          error={error}
          label="Price"
          name="price"
          type="text"
          onChange={(e) => (priceRef.current.value = e.target.value)}
        />
        <Select
          error={error}
          label="Vendor"
          name="vendorId"
          data={vendors}
          onChange={(data) => (vendorIdRef.current.value = data)}
          inputRef={vendorIdRef}
        />
        <InputDate inputRef={dateRef} error={error} label="Date" name="date" />
      </Modal>
    </div>
  );
}
