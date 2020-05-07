import React from "react";

const Footer = () => {
  return (
    <p className="text-center p-4 text-gray-600 mt-10">
      Created by
      <a
        className="border-b text-blue-500"
        href="https://twitter.com/mithicher"
        target="_blank"
        rel="noopener noreferrer"
      >
        @mithicher
      </a>
      . Inspired by dribble shot
      <a
        href="https://dribbble.com/shots/8807920-Quickpay-Hero-section/attachments/1015863"
        target="_blank"
        className="border-b text-blue-500"
        rel="noopener noreferrer"
      >
        https://dribbble.com/vadimdrut
      </a>
    </p>
  );
};

export default Footer;
