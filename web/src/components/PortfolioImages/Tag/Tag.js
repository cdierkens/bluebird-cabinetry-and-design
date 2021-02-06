import PropTypes from "prop-types";
import React from "react";

const className =
  "cursor-pointer inline-block rounded p-3 m-1 sm:m-2 focus:outline-none focus:ring shadow-md";

const Tag = ({ label, onChange, value, checked }) => {
  return (
    <label
      className={`${className} ${
        checked ? "bg-blue-dark text-white" : "bg-white text-blue-dark"
      }`}
    >
      <input
        aria-label={label}
        className="sr-only"
        type="checkbox"
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

export default Tag;
