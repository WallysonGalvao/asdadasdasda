import React from "react";

const HintMessage = ({
  isValid = false,
  successMessage = "",
  errorMessage = "",
}) => {
  return (
    <li className="flex items-center py-1">
      <div
        className={`rounded-full p-1 fill-current ${
          isValid ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"
        }`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <span
        className={`font-medium text-sm ml-3 ${
          isValid ? "text-green-700" : "text-red-700"
        }`}
      >
        {isValid ? successMessage : errorMessage}
      </span>
    </li>
  );
};

export default HintMessage;
