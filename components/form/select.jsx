"use client";
import { Listbox, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";
import { useState } from "react";
export default function Select({
  label,
  name,
  data,
  defaultValue,
  onChange,
  values,
}) {
  const [value, setValue] = useState(defaultValue);
  const filter = data?.find(({ id }) => id === value);
  const handleChange = (v) => {
    setValue(v);
    onChange(name, v);
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-900">{label}</label>
      <Listbox value={values} onChange={(val) => handleChange(val)}>
        <div className="relative mt-1">
          <Listbox.Button className="ring-1 ring-slate-500 relative w-full cursor-default rounded-lg bg-white py-3 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {defaultValue
                ? filter?.name
                : values === ""
                ? "select published"
                : filter?.name}
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
              {data?.map((v, i) => (
                <Listbox.Option
                  key={i}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={v.id}
                >
                  <>
                    <span
                      className={`block truncate ${
                        defaultValue === v.name ? "font-medium" : "font-normal"
                      }`}
                    >
                      {v.name}
                    </span>
                    {value === v.id ? (
                      <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                        <HiCheck className="h-5 w-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>

    // <div>
    //   <label htmlFor={name} className="block text-sm font-medium text-gray-900">
    //     {label}
    //   </label>

    //   <select
    //     name={name}
    //     className="mt-1.5 w-full rounded-lg border-gray-300 text-gray-700 sm:text-sm"
    //     defaultValue={defaultValue}
    //     onChange={onChange}
    //   >
    //     <option>Please select</option>
    //     {data?.map((value, i) => {
    //       return (
    //         <option key={i} value={value.id}>
    //           {value.name}
    //         </option>
    //       );
    //     })}
    //   </select>
    // </div>
  );
}
