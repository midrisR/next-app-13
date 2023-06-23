export default function Alert({ message }) {
  return (
    <div
      role="alert"
      className="rounded border-s-4 border-red-500 bg-red-50 p-4 text-center"
    >
      <strong className="block font-medium text-red-800">{message}</strong>
    </div>
  );
}
