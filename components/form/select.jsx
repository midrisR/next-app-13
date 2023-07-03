export default function Select({ label, name, data, defaultValue, onChange }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-900">
        {label}
      </label>

      <select
        name={name}
        className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
        defaultValue={defaultValue}
        onChange={onChange}
      >
        <option>Please select</option>
        {data?.map((value, i) => (
          <option key={i} value={value.id}>
            {value.name}
          </option>
        ))}
      </select>
    </div>
  );
}
