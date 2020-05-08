import PropTypes from "prop-types";
import React from "react";
import styles from "./Select.module.css";

const Option = ({ children }) => (
  <option className={styles.Option}>{children}</option>
);

Option.propTypes = {
  children: PropTypes.node,
};

const Select = ({ children }) => (
  <div className={styles.SelectWrapper}>
    <select className={styles.Select}>{children}</select>
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
);

Select.propTypes = {
  children: PropTypes.arrayOf(Option),
};

Select.Option = Option;

export default Select;
