import React from "react";
import Button from "../Button";
import * as styles from "./LearnMore.module.css";

const LearnMore = () => {
  return (
    <div className={styles.LearnMoreContainer}>
      <span className={styles.LearnMoreText}>Interested in learning more?</span>
      <Button variant="blue" to="/contact" className={styles.LearnMoreLink}>
        Contact Us
      </Button>
    </div>
  );
};

export default LearnMore;
