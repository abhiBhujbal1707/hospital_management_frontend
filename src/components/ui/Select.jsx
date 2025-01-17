import { useState } from "react";

export const Select = ({ children, className }) => {
  return <div className={`relative inline-block ${className}`}>{children}</div>;
};

export const SelectTrigger = ({ children, onClick, className }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`w-full bg-white border border-gray-300 rounded-md p-2 text-left hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
    >
      {children}
    </button>
  );
};

export const SelectValue = ({ value, placeholder }) => {
  return <span>{value || placeholder}</span>;
};

export const SelectContent = ({ isOpen, children, className }) => {
  return (
    isOpen && (
      <div
        className={`absolute mt-2 w-full bg-white border border-gray-300 rounded-md shadow-lg z-10 ${className}`}
      >
        {children}
      </div>
    )
  );
};

export const SelectItem = ({ value, onSelect, children, className }) => {
  return (
    <div
      onClick={() => onSelect(value)}
      className={`p-2 cursor-pointer hover:bg-gray-100 ${className}`}
    >
      {children}
    </div>
  );
};
