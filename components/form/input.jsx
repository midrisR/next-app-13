export default function Input({
  label,
  name,
  type,
  defaultValue,
  onChange,
  value,
}) {
  return (
    <div>
      <label htmlFor="name" className="font-semibold text-slate-700">
        {label}
      </label>
      <input
        className="w-full shadow-lg rounded-lg border border-gray-400 p-3 text-sm mt-2"
        name={name}
        type={type}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}
