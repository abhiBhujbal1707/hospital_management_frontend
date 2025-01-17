import React from 'react';
export const RadioGroup = ({ name, options, value, onChange }) => (
    <div className="space-y-2">
      {options.map((option) => (
        <div key={option.value} className="flex items-center">
          <RadioGroupItem
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
          />
          <Label>{option.label}</Label>
        </div>
      ))}
    </div>
  );
  
  export const RadioGroupItem = ({ name, value, checked, onChange }) => (
    <input
      type="radio"
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className="mr-2 h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
    />
  );
  