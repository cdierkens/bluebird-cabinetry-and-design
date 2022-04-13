import clsx from "clsx";
import React from "react";
import * as styles from "./Container.module.css";

interface ContainerProps {
  className?: string;
}

const Container: React.FC<React.PropsWithChildren<ContainerProps>> = ({ className, children }) => {
  return <div className={clsx(styles.Container, className)}>{children}</div>;
};

export default Container;
