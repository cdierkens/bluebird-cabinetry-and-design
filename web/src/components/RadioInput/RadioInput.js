import PropTypes from "prop-types";
import React from "react";

const RadioInput = ({ label, value, group, checked, onChange }) => (
  <div>
    <label className="flex items-center">
      <span className="relative h-4 w-4">
        <input
          className="absolute z-0 w-full h-full focus:outline-none focus:shadow-outline shadow-sm"
          type="radio"
          id={value}
          name={group}
          value={value}
          checked={checked}
          onChange={onChange}
        />
        <span
          className={`absolute z-10 rounded-full inline-block w-full h-full ${
            checked ? "bg-blue-dark" : "bg-white"
          }`}
        ></span>
      </span>
      <span className="font-sans text-sm ml-2">{label}</span>
    </label>
  </div>
);

RadioInput.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  group: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
};

RadioInput.defaultProps = {
  checked: false,
  onChange: () => {},
};

export default RadioInput;
