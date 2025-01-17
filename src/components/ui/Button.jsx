import React from "react";
export const Button = ({ variant = "primary", children, ...props }) => {
    const baseStyle = "px-4 py-2 rounded font-medium text-white focus:outline-none";
    const variants = {
      primary: `${baseStyle} bg-blue-500 hover:bg-blue-600`,
      secondary: `${baseStyle} bg-gray-300 text-black hover:bg-gray-400`,
      destructive: `${baseStyle} bg-red-500 hover:bg-red-600`,
      outline: `${baseStyle} border border-gray-500 text-gray-500 hover:bg-gray-100`,
    };
  
    return (
      <button className={variants[variant]} {...props}>
        {children}
      </button>
    );
  };
  