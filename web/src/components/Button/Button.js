import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import * as styles from "./Button.module.css";

const Button = ({ variant, className, children, to, type, onClick }) => {
  const fullClassName = `${
    variant === "white" ? styles.ButtonWhite : styles.ButtonBlue
  } ${className} focus:outline-none focus:ring`;

  return type === "link" ? (
    <Link to={to} className={fullClassName}>
      {children}
    </Link>
  ) : (
    <button type={type} className={fullClassName} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["white", "blue"]),
  type: PropTypes.oneOf(["link", "button", "submit"]),
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  type: "link",
  variant: "white",
  className: "",
  onClick: () => {},
};

export default Button;
