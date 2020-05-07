import React from "react";

const Input = ({ field, name, value, type, onChange, placeholder = "" }) => {
  return (
    <div className="py-1">
      <span className="px-1 text-sm text-gray-600">{field}</span>
      <input
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
        className="text-md block px-3 py-2 rounded-lg w-full bg-white border-2 border-gray-300 placeholder-gray-600 shadow-md focus:placeholder-gray-500 focus:bg-white focus:border-gray-600 focus:outline-none"
      />
    </div>
  );
};

export default Input;
