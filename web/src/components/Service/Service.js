import PropTypes from "prop-types";
import React from "react";
import styles from "./Service.module.css";

const Service = ({ name, icon, alt }) => {
  return (
    <div>
      <img src={icon} alt="" className={styles.Service} />
      {name}
    </div>
  );
};

Service.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.symbol,
  alt: PropTypes.string,
};

export default Service;
