import React from "react";
export const Label = ({ children, ...props }) => (
    <label className="block mb-2 text-sm font-medium text-gray-700" {...props}>
      {children}
    </label>
  );
  