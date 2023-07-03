import { FaArrowRightFromBracket } from "react-icons/fa6";
export default function Dropdown({ signOut }) {
  return (
    <div
      className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
      role="menu"
    >
      <div className="p-2">
        <button
          type="submit"
          className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
          role="menuitem"
          onClick={signOut}
        >
          <FaArrowRightFromBracket />
          Log out
        </button>
      </div>
    </div>
  );
}
