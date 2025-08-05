import { useState, useRef } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/form/input";
import Modal from "@/components/modal/modal";
import ModalDelete from "@/components/modal/delete";
import { FaEye } from "react-icons/fa6";
import Select from "@/components/form/select";
import InputDate from "@/components/form/inputDate";
import format from "date-fns/format";
export default function tbody({ data, accessToken, vendors }) {
  const router = useRouter();
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const productRef = useRef("");
  const vendorIdRef = useRef("");
  const priceRef = useRef("");
  const dateRef = useRef("");

  const onSubmit = async (e, id) => {
    e.preventDefault();
    const value = {
      product: productRef.current.value,
      vendorId: vendorIdRef.current.value,
      price: priceRef.current.value,
      date: dateRef.current.value,
    };
    const res = await fetch(`https://api.projectme.my.id/apioffers/${id}`, {
      method: "PUT",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
        Authorization: accessToken,
      },
    });
    const result = await res.json();
    if (result.success) {
      productRef.current.value = "";
      vendorIdRef.current.value = "";
      priceRef.current.value = "";
      dateRef.current.value = "";
      setSuccess(true);
      setError({});
      router.refresh();
    } else {
      setError(result.error);
    }
    return result;
  };
  const deleteOffers = async (id) => {
    await fetch(`https://api.projectme.my.id/apioffers/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: accessToken,
      },
    });
    router.refresh();
  };
  return (
    <tbody className="divide-y divide-gray-200">
      {data?.map((val, i) => (
        <tr key={i}>
          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
            {val.product}
          </td>

          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
            {val.Vendor?.name || val.vendorId}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
            {val.price}
          </td>
          <td className="whitespace-nowrap px-4 py-2 text-gray-800">
            {/* {format(new Date(val.date), "dd MMMM yyyy")} */}
            {val.date}
          </td>

          <td className="whitespace-nowrap flex gap-1 px-4 py-2">
            <Modal
              success={success}
              icon={<FaEye />}
              data={data}
              id={val.id}
              onSubmit={(e) => onSubmit(e, val.id)}
            >
              <div className="mt-2">
                <Input
                  inputRef={productRef}
                  error={error}
                  label="Product"
                  name="product"
                  type="text"
                  defaultValue={val.product}
                  onChange={(e) => (productRef.current.value = e.target.value)}
                />
                <Input
                  inputRef={priceRef}
                  error={error}
                  label="Price"
                  name="price"
                  type="text"
                  defaultValue={val.price}
                  onChange={(e) => (priceRef.current.value = e.target.value)}
                />
                <Select
                  error={error}
                  label="Vendor"
                  name="vendorId"
                  data={vendors}
                  onChange={(data) => (vendorIdRef.current.value = data)}
                  defaultValue={val.vendorId}
                  inputRef={vendorIdRef}
                />
                <InputDate
                  inputRef={dateRef}
                  error={error}
                  label="Date"
                  name="date"
                  defaultValue={val.date}
                />
              </div>
            </Modal>
            <ModalDelete handleDelete={() => deleteOffers(val.id)} />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
