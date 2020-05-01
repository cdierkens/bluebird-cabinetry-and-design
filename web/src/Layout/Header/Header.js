import { Link } from "gatsby";
import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import { useMatchMedia } from "../../hooks";
import DesktopNav from "./DesktopNav/DesktopNav.js";
import styles from "./Header.module.css";
import MobileNav from "./MobileNav/MobileNav.js";

const { theme } = resolveConfig(tailwindConfig);

const Links = () => (
  <>
    <Link className={styles.Link} to="/">
      Home
    </Link>
    <Link className={styles.Link} to="/about">
      About
    </Link>
    <Link className={styles.Link} to="/services">
      Services
    </Link>
    <Link className={styles.Link} to="/portfolio">
      Portfolio
    </Link>
    <Link className={styles.Button} to="/contact">
      Contact
    </Link>
  </>
);

const Header = () => {
  const isMobile = useMatchMedia(`(max-width: ${theme.screens.md})`);

  return (
    <header className={styles.Header}>
      {isMobile ? (
        <MobileNav>
          <Links />
        </MobileNav>
      ) : (
        <DesktopNav>
          <Links />
        </DesktopNav>
      )}
    </header>
  );
};

export default Header;
