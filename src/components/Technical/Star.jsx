import React from "react";

const Star = ({ color, size = 80 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L14.8 8.9H22L16.4 13.5L18.6 21L12 16.9L5.4 21L7.6 13.5L2 8.9H9.2L12 2Z" />
    </svg>
);

export default Star
