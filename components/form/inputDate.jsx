import { useEffect, useRef, useState } from "react";
import { getFieldError, getMessageError } from "./error";
import { Calendar } from "react-date-range";
import format from "date-fns/format";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import ca from "date-fns/esm/locale/ca/index.js";

export default function InputDate({
  inputRef,
  label,
  name,
  error,
  defaultValue = "",
}) {
  // date state
  const [calendar, setCalendar] = useState(defaultValue);

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleSelect = (date) => {
    setCalendar(format(date, "MM/dd/yyyy"));
    inputRef.current.value = format(date, "MM/dd/yyyy");
    setOpen(false);
  };
  return (
    <div ref={refOne}>
      <label className="font-medium text-slate-700 text-sm">{label}</label>

      <input
        ref={inputRef}
        value={calendar ? format(new Date(calendar), "MM/dd/yyyy") : ""}
        name={name}
        readOnly
        placeholder={format(new Date(), "MM/dd/yyyy")}
        className={`w-full shadow-lg rounded-lg border p-3 text-sm mt-1 ${getFieldError(name, error) ? "border-red-400 " : "border-gray-400 "
          }`}
        onClick={() => setOpen((open) => !open)}
      />
      {getMessageError(name, error)}
      {open && (
        <div className="absolute top-0 z-50 transition ease-in-out duration-500 ">
          <Calendar
            date={defaultValue ? new Date(defaultValue) : new Date()}
            onChange={handleSelect}
            className="calendarElement shadow-2xl rounded-xl"
          />
        </div>
      )}
    </div>
  );
}
