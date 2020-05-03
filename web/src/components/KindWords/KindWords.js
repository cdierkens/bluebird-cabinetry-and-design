import { Link } from "gatsby";
import React from "react";
import Container from "../container";
import styles from "./KindWords.module.css";

const KindWords = () => {
  return (
    <Container className={styles.KindWordsContainer}>
      <h2 className={styles.KindWordsH2}>Kind Words</h2>
      <Link className={styles.Button} to="/kindwords">
        Read More
      </Link>
    </Container>
  );
};

export default KindWords;
