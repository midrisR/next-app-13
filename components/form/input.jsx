export default function Input({ label, name, type, defaultValue, onChange }) {
  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input
        className="w-full rounded-lg border-gray-200 p-3 text-sm"
        name={name}
        type={type}
        defaultValue={defaultValue}
        onChange={onChange}
      />
    </div>
  );
}
