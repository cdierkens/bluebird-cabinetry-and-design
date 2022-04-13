import { useField } from "formik";
import React from "react";

interface RadioInputProps {
  label: string;
  name: string;
  value: string;
}

const RadioInput: React.FC<RadioInputProps> = ({ label, ...props }) => {
  const [field] = useField({
    ...props,
    type: "radio",
  });

  return (
    <div>
      <label className="flex items-center cursor-pointer">
        <span className="relative h-4 w-4">
          <input
            className="absolute z-0 w-full h-full focus:outline-none focus:ring shadow-md"
            type="radio"
            {...field}
            {...props}
          />
          <span
            className={`absolute z-10 rounded-full inline-block w-full h-full ${
              field.checked ? "bg-blue-dark" : "bg-white"
            }`}
          ></span>
        </span>
        <span className="font-sans text-sm ml-2">{label}</span>
      </label>
    </div>
  );
};

export default RadioInput;
