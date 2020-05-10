import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import styles from "./Button.module.css";

const Button = ({ variant, className, children, to }) => (
  <Link
    to={to}
    className={`${
      variant ? styles.ButtonWhite : styles.ButtonBlue
    } ${className}`}
    activeClassName={
      variant ? styles.ButtonWhiteActive : styles.ButtonBlueActive
    }
  >
    {children}
  </Link>
);

Button.propTypes = {
  variant: PropTypes.oneOf(["white", "blue"]),
  children: PropTypes.node,
  className: PropTypes.string,
  to: PropTypes.string,
};

Button.defaultProps = {
  variant: "white",
  className: "",
};

export default Button;
