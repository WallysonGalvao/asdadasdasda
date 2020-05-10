import React, { useRef } from "react";

export default function Device({ title, device, items, onClick }) {
  const selectRef = useRef();
  const setScene = () => onClick(device.id, selectRef.current.value);
  return (
    <div className="m-5 p-6 border rounded">
      <h4>Frindly name for device</h4>
      <div className="w-full mb-6">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-state"
        >
          {title}
        </label>
        <div className="relative">
          <select
            ref={selectRef}
            name={`device-${device.id}`}
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="grid-state"
          >
            {items.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        <button
          type="button"
          onClick={setScene}
          className="mt-3 text-lg font-semibold bg-gray-800 w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:text-white hover:bg-black"
        >
          Define Scene
        </button>
      </div>
    </div>
  );
}
