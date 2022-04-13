import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import { tw } from "../../lib/tailwind";
import * as styles from "./Button.module.css";

type ButtonProps = {
  variant?: "white" | "blue";
  className?: string;
} & (
  | {
      type: "link";
      to: string;
      onClick?: never;
    }
  | {
      type?: "button" | "submit";
      to?: never;
      onClick?: React.MouseEventHandler<HTMLButtonElement>;
    }
);

const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({
  children,
  className,
  onClick,
  to,
  type = "button",
  variant = "white",
}) => {
  const fullClassName = clsx(
    styles.Button,
    {
      [styles.ButtonWhite]: variant === "white",
      [styles.ButtonBlue]: variant === "blue",
    },
    tw`focus:outline-none focus:ring`,
    className
  );

  return type === "link" ? (
    <Link to={to as string} className={fullClassName}>
      {children}
    </Link>
  ) : (
    <button type={type} className={fullClassName} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
