import { Link } from "gatsby";
import React from "react";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import Button from "../../components/Button/index.js";
import { useMatchMedia } from "../../hooks";
import DesktopNav from "./DesktopNav/DesktopNav.js";
import styles from "./Header.module.css";
import MobileNav from "./MobileNav/MobileNav.js";

const { theme } = resolveConfig(tailwindConfig);

const Links = () => (
  <>
    <Link className={styles.Link} activeClassName={styles.LinkActive} to="/">
      Home
    </Link>
    <Link
      className={styles.Link}
      activeClassName={styles.LinkActive}
      to="/about"
    >
      About
    </Link>
    <Link
      className={styles.Link}
      activeClassName={styles.LinkActive}
      to="/services"
    >
      Services
    </Link>
    <Link
      className={styles.Link}
      activeClassName={styles.LinkActive}
      to="/portfolio"
    >
      Portfolio
    </Link>
    <Button variant="blue" className={styles.Button} to="/contact">
      Contact
    </Button>
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
