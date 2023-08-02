import { getFieldError, getMessageError } from "./error";
export default function InputFile({
  label,
  name,
  preview,
  onChange,
  inputRef,
  size = 100,
  error,
}) {
  return (
    <div className="mb-3">
      <label
        htmlFor="formFile"
        className="mb-2 inline-block font-medium text-slate-700"
      >
        {label}
      </label>
      <input
        ref={inputRef}
        className={`w-full shadow-lg rounded-lg border p-3 text-sm mt-2 ${
          getFieldError(name, error) ? "border-red-400 " : "border-gray-400 "
        }`}
        name={name}
        type="file"
        multiple
        onChange={onChange}
      />
      {getMessageError(name, error)}

      {preview && (
        <div className="flex gap-4 mt-4">
          {preview.map((img, i) => (
            <img
              key={i}
              src={URL.createObjectURL(img)}
              alt="dummy"
              width={size}
              height={size}
            />
          ))}
        </div>
      )}
    </div>
  );
}
