import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";
import React from "react";

const className =
  "block w-full bg-white border border-gray-light px-3 py-3 pr-8 leading-tight font-sans text-base placeholder-gray-darker focus:outline-none focus:shadow-outline shadow-sm";

const Input = ({ label, type, ...props }) => {
  const [field] = useField({
    ...props,
    type: type === "textarea" ? "text" : type,
  });

  return (
    <label className="block relative pb-5 mb-2">
      <span className="block text-blue-dark text-base ml-1 mb-1">{label}</span>

      {type === "textarea" ? (
        <textarea className={className} rows={6} {...field} {...props} />
      ) : (
        <input className={className} type={type} {...field} {...props} />
      )}

      <ErrorMessage name={field.name}>
        {(error) => (
          <span className="ml-1 text-sm absolute bottom-0 text-gold">
            {error}
          </span>
        )}
      </ErrorMessage>
    </label>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "email", "password", "textarea"]),
};

Input.defaultProps = {
  placeholder: null,
  type: "text",
};

export default Input;
