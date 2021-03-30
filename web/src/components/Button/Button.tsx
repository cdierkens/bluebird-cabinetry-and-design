import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import { tw } from "../../lib/tailwind";
import * as styles from "./Button.module.css";

interface ButtonProps {
  variant?: "white" | "blue";
  type?: "link" | "button" | "submit";
  className?: string;
  to: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className,
  onClick,
  to,
  type = "link",
  variant = "white",
}) => {
  const fullClassName = clsx(
    {
      [styles.ButtonWhite]: variant === "white",
      [styles.ButtonBlue]: variant === "blue",
    },
    tw`focus:outline-none focus:ring`,
    className
  );

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

export default Button;
