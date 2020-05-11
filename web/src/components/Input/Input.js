import PropTypes from "prop-types";
import React from "react";

const Input = ({ label, value, placeholder, onChange, id, error, type }) => {
  const className =
    "block w-full bg-white border border-gray-light px-3 py-3 pr-8 leading-tight font-sans text-sm placeholder-gray-darker focus:outline-none focus:shadow-outline";

  return (
    <label className="block relative pb-5 mb-2">
      <span className="block text-blue-dark text-base ml-1 mb-1">{label}</span>

      {type === "text" ? (
        <input
          className={className}
          type="text"
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
        />
      ) : (
        <textarea
          className={className}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          value={value}
          rows={6}
        />
      )}

      {error && (
        <span className="ml-1 text-sm absolute bottom-0 text-gold">
          {error}
        </span>
      )}
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  type: PropTypes.oneOf(["text", "textarea"]),
};

Input.defaultProps = {
  value: "",
  onChange: () => {},
  placeholder: "",
  error: null,
  type: "text",
};

export default Input;
