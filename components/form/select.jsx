import { Listbox, Transition } from "@headlessui/react";
import { useState, useEffect } from "react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";
import { getFieldError, getMessageError } from "./error";

export default function Select({
  label,
  name,
  data,
  onChange,
  error,
  inputRef,
  defaultValue = "",
}) {
  const [value, setValue] = useState(defaultValue);
  const filter = data?.find(({ id }) => id === value);

  useEffect(() => {
    inputRef.current.value = String(defaultValue);
  }, []);

  const handleChange = (values) => {
    setValue(values);
    onChange(String(values));
  };

  return (
    <div className="mb-3">
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <Listbox
        ref={inputRef}
        value={value}
        onChange={(val) => handleChange(val)}
      >
        <div className="relative mt-1">
          <Listbox.Button
            className={`ring-1 ${
              getFieldError(name, error) ? "ring-red-400" : "border-gray-500"
            } relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}
          >
            <span className="block truncate">
              {!value ? "select published" : filter?.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {data?.map(({ id, name }) => (
                <Listbox.Option
                  key={id}
                  className={`relative select-none py-2 pl-10 pr-4 hover:bg-amber-100 cursor-pointer ${
                    value === id
                      ? "bg-amber-200 text-amber-900"
                      : "text-gray-900"
                  }`}
                  value={id}
                >
                  <span
                    className={`block truncate ${
                      value === id ? "font-bold" : "font-normal"
                    }`}
                  >
                    {name}
                  </span>
                  {value === id ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <HiCheck className="h-5 w-5" aria-hidden="true" />
                    </span>
                  ) : null}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {getMessageError(name, error)}
    </div>
  );
}
