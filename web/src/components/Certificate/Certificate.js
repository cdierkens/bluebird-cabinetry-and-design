import PropTypes from "prop-types";
import React from "react";
import { buildImageObj } from "../../../src/lib/helpers";
import { imageUrlFor } from "../../../src/lib/image-url";
import styles from "./Certificate.module.css";

const Certificate = ({ image }) => {
  return (
    <div className={styles.Certificate}>
      <img
        src={imageUrlFor(buildImageObj(image))
          .width(1200)
          .height(Math.floor((9 / 16) * 1200))
          .fit("crop")
          .auto("format")
          .url()}
        alt={image.alt}
      />
    </div>
  );
};

Certificate.propTypes = {
  image: PropTypes.object,
};

export default Certificate;
