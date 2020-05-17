import { ErrorMessage, useField } from "formik";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Select.module.css";

const Option = ({ children, disabled, value }) => (
  <option value={value} className={styles.Option} disabled={disabled}>
    {children}
  </option>
);

Option.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  selected: PropTypes.bool,
  value: PropTypes.string.isRequired,
};

Option.defaultProps = {
  disabled: false,
  selected: false,
};

const Select = ({ children, label, ...props }) => {
  const [field] = useField(props);

  return (
    <label className={styles.SelectWrapper}>
      <span className="block text-blue-dark text-base ml-1 mb-1">{label}</span>
      <div className="relative">
        <select className={styles.Select} {...field} {...props}>
          {children}
        </select>
        <div className={styles.Arrow}>
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
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

Select.propTypes = {
  children: PropTypes.arrayOf(Option),
  label: PropTypes.string.isRequired,
};

Select.Option = Option;

export default Select;
