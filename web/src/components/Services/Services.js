import React from "react";
import Service from "../Service";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={styles.ServicesContainer}>
      <Service />
      <h2 className={styles.ServicesH2}>Services</h2>
    </div>
  );
};

export default Services;
