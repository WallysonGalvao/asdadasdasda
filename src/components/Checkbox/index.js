import React from "react";

import "./styles.css";

export default function Checkbox({ name, value, checked, onChange, children }) {
  return (
    <label className="custom-label flex">
      <div className="bg-white shadow w-6 h-6 p-1 flex justify-center items-center mr-2">
        <input
          name={name}
          type="checkbox"
          value={value}
          className="hidden"
          checked={checked}
          onChange={onChange}
        />
        <svg
          className="hidden w-4 h-4 text-green-600 pointer-events-none"
          viewBox="0 0 172 172"
        >
          <g
            fill="none"
            strokeWidth="none"
            strokeMiterlimit="10"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            /* style="mix-blend-mode:normal" */
          >
            <path d="M0 172V0h172v172z" />
            <path
              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
              fill="currentColor"
              strokeWidth="1"
            />
          </g>
        </svg>
      </div>
      <span className="select-none">{children}</span>
    </label>
  );
}
