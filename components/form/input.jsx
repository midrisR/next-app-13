import { getFieldError, getMessageError } from "./error";
export default function Input({
  label,
  name,
  type,
  onChange,
  error,
  inputRef,
  ...props
}) {
  return (
    <div className="mb-3">
      <label htmlFor="name" className="font-medium text-slate-700 text-sm">
        {label}
      </label>
      <input
        ref={inputRef}
        className={`w-full rounded-md border p-3 text-sm mt-1 ${
          getFieldError(name, error) ? "border-red-400 " : "border-gray-300 "
        }`}
        name={name}
        type={type}
        {...props}
        onChange={onChange}
      />
      {getMessageError(name, error)}
    </div>
  );
}
