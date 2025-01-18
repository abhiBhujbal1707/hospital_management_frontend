import React from "react";

export const Button = ({ variant = "primary", children, ...props }) => {
  const baseStyle = "px-4 py-2 rounded font-medium focus:outline-none";
  const variants = {
    primary: `${baseStyle} bg-gray-400 text-black hover:bg-gray-500`,
    cancel: `${baseStyle} bg-red-500 text-white hover:bg-red-600`,
    secondary: `${baseStyle} bg-gray-400 text-black hover:bg-gray-500`,
    outline: `${baseStyle} border border-gray-500 text-gray-500 hover:bg-gray-100`,
  };

  return (
    <button className={variants[variant]} {...props}>
      {children}
    </button>
  );
};

  