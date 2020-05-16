import { useField } from "formik";
import PropTypes from "prop-types";
import React from "react";

const RadioInput = ({ label, ...props }) => {
  const [field] = useField({
    ...props,
    type: "radio",
  });

  return (
    <div>
      <label className="flex items-center cursor-pointer">
        <span className="relative h-4 w-4">
          <input
            className="absolute z-0 w-full h-full focus:outline-none focus:shadow-outline shadow-sm"
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

RadioInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default RadioInput;
