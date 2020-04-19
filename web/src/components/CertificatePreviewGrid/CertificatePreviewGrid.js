import PropTypes from "prop-types";
import React from "react";
import CertificatePreview from "../CertificatePreview/CertificatePreview";
import styles from "./CertificatePreviewGrid.module.css";

const CertificatePreviewGrid = ({ nodes }) => {
  return (
    <ul className={styles.CertificatePreviewGrid}>
      {nodes &&
        nodes.map((node) => (
          <li key={node.id}>
            <CertificatePreview {...node} />
          </li>
        ))}
    </ul>
  );
};

CertificatePreviewGrid.propTypes = {
  title: PropTypes.string,
  nodes: PropTypes.array,
};

CertificatePreviewGrid.defaultProps = {
  title: "",
  nodes: [],
};
export default CertificatePreviewGrid;
