import { Link } from "gatsby";
import { PropTypes } from "prop-types";
import React, { useState } from "react";
import logo from "../../../logo.png";
import styles from "./MobileNav.module.css";

const MobileNav = ({ children }) => {
  const [isOpen, setIsOpen] = useState();

  return (
    <div className={styles.MobileNav}>
      <nav className="grid grid-cols-3 sm:grid-cols-6">
        <div className="col-span-2 sm:col-span-5">
          <Link className="m-3 block" to="/">
            <img className={styles.Logo} src={logo} alt="Bluebird Logo" />
          </Link>
        </div>

        <div className="col-start-3 sm:col-start-6 items-center justify-end flex">
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="flex items-center px-3 py-2 border rounded text-blue-dark hover:bg-white m-3"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="col-span-3 sm:col-span-6 flex flex-col">
            {children}
          </div>
        )}
      </nav>
    </div>
  );
};

MobileNav.propTypes = {
  children: PropTypes.node,
};

export default MobileNav;
