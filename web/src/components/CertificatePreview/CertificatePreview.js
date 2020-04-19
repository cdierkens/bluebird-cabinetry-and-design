import PropTypes from "prop-types";
import React from "react";
import { buildImageObj } from "../../lib/helpers";
import { imageUrlFor } from "../../lib/image-url";
import styles from "./CertificatePreview.module.css";

const CertificatePreview = ({ image }) => {
  return (
    <div className={styles.CertificatePreview}>
      {image && image.asset && (
        <img
          src={imageUrlFor(buildImageObj(image))
            .width(600)
            .height(Math.floor((9 / 16) * 600))
            .auto("format")
            .url()}
          alt={image.alt}
        />
      )}
      }
    </div>
  );
};

CertificatePreview.propTypes = {
  image: PropTypes.object,
};
export default CertificatePreview;
