import { ErrorMessage, useField } from "formik";
import React from "react";
import * as styles from "./Select.module.css";

interface OptionProps {
  disabled?: boolean;
  value: string;
}

const Option: React.FC<OptionProps> = ({
  children,
  disabled = false,
  value,
}) => (
  <option value={value} className={styles.Option} disabled={disabled}>
    {children}
  </option>
);

interface SelectProps {
  label: string;
  name: string;
}

const Select: React.FC<SelectProps> & {
  Option: typeof Option;
} = ({ children, label, name }) => {
  const [field] = useField(name);

  return (
    <label className={styles.SelectWrapper}>
      <span className="block text-blue-dark text-base ml-1 mb-1">{label}</span>
      <div className="relative">
        <select className={styles.Select} {...field}>
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

Select.Option = Option;

export default Select;
