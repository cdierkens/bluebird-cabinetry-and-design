import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import bath from "../../images/Bathroom1.jpg";
import kitchen1 from "../../images/Kitchen1.jpg";
import kitchen2 from "../../images/Kitchen2.jpg";
import kitchen3 from "../../images/Kitchen3.jpg";
import Container from "../container";
import styles from "./DesignPreview.module.css";

export const query = graphql`
  query DesignPreviewQuery {
    designPreview: sanityDesignPreview {
      images {
        webImage {
          description
          file {
            asset {
              id
            }
          }
        }
        colSpan
        rowSpan
      }
    }
  }
`;

const DesignPreview = (/*{ data: { designPreview }, errors }*/) => {
  return (
    <>
      <Container className={styles.DesignContainer}>
        <h2 className={styles.DesignH2}>Title copy about design style</h2>

        <p className={styles.DesignText}>
          Spicy jalapeno bacon ipsum dolor amet hamburger laborum ea, nisi pork
          loin ham hock sed ribeye. Enim burgdoggen turducken tongue meatloaf
          ground round tenderloin chislic consectetur pancetta.
        </p>
      </Container>

      <Container className={styles.DesignImageContainer}>
        <img src={kitchen1} alt="logo" className={styles.DesignImage1} />
        <img src={kitchen2} alt="logo" className={styles.DesignImage2} />
        <img src={kitchen3} alt="logo" className={styles.DesignImage3} />
        <img src={bath} alt="logo" className={styles.DesignImage4} />
      </Container>
    </>
  );
};

DesignPreview.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
};

export default DesignPreview;
