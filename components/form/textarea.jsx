import { getFieldError, getMessageError } from "./error";
export default function Textarea({
  name,
  onChange,
  error,
  inputRef,
  defaultValue,
}) {
  return (
    <div>
      <label>Description</label>
      <textarea
        ref={inputRef}
        className={`w-full shadow-lg rounded-lg border p-3 text-sm mt-2 ${
          getFieldError(name, error) ? "border-red-400 " : "border-gray-400 "
        }`}
        placeholder={name}
        name={name}
        rows="8"
        defaultValue={defaultValue}
        onChange={onChange}
      ></textarea>
      {getMessageError(name, error)}
    </div>
  );
}
