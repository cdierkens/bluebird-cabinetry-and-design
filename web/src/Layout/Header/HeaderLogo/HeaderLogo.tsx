import clsx from "clsx";
import { Link } from "gatsby";
import React from "react";
import { useScrollPosition } from "../../../hooks";
import logo from "../../../images/logo.png";
import * as styles from "./HeaderLogo.module.css";

interface HeaderLogoProps {
  className?: string;
}

const HeaderLogo: React.FC<React.PropsWithChildren<HeaderLogoProps>> = ({ className }) => {
  const position = useScrollPosition();

  return (
    <div className={clsx(styles.HeaderLogo, className)}>
      <Link to="/">
        <img
          className={clsx(styles.Logo, {
            [styles.LogoTransform]: position?.y && position.y > 200,
          })}
          src={logo}
          alt="Bluebird Logo"
        />
      </Link>
    </div>
  );
};

export default HeaderLogo;
