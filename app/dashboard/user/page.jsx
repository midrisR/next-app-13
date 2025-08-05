"use client";
import { useState, forwardRef, useRef } from "react";
import Datepicker from "react-tailwindcss-datepicker";

function Input() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });
  const handleValueChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <Datepicker asSingle={true} value={value} onChange={handleValueChange} />
  );
}
const User = forwardRef((props, ref) => {
  console.log(ref);
  return <Datepicker />;
});
export default User;
