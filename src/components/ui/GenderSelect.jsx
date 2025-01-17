import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select.jsx";

const GenderSelect = ({ selectedGender, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);
  
  const handleSelect = (value) => {
    onChange(value); // Call the onChange handler passed as prop
    setIsOpen(false); // Close the dropdown
  };

  return (
    <Select className="w-full">
      <SelectTrigger onClick={toggleDropdown} className="w-full">
        <SelectValue value={selectedGender} placeholder="Select gender" />
      </SelectTrigger>
      <SelectContent isOpen={isOpen}>
        <SelectItem value="male" onSelect={() => handleSelect("male")}>
          Male
        </SelectItem>
        <SelectItem value="female" onSelect={() => handleSelect("female")}>
          Female
        </SelectItem>
        <SelectItem value="other" onSelect={() => handleSelect("other")}>
          Other
        </SelectItem>
      </SelectContent>
    </Select>
  );
};

export default GenderSelect;
