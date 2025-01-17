import React from 'react';
export const Select = ({ value, onChange, children }) => (
    <div className="relative">
      <select
        className="w-full px-4 py-2 border rounded focus:ring-2 focus:ring-blue-300"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </select>
    </div>
  );
  
  export const SelectItem = ({ value, children }) => <option value={value}>{children}</option>;
  