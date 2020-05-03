import { Link } from "gatsby";
import React from "react";
import styles from "./LearnMore.module.css";

const LearnMore = () => {
  return (
    <div className={styles.LearnMoreContainer}>
      <span className={styles.LearnMoreText}>Interested in learning more?</span>
      <Link to="/contact" className={styles.LearnMoreLink}>
        Contact Us
      </Link>
    </div>
  );
};

export default LearnMore;
