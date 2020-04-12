import PropTypes from "prop-types";
import React from "react";
import CertificatesPreview from "./certificates-preview";

function CertificatesPreviewGrid({ title, nodes }) {
  return (
    <div className="certificates-preview-grid-container">
      {title && <h2 className="certificates-headline">{title}</h2>}
      <ul className="certificates-grid">
        {nodes &&
          nodes.map((node) => (
            <li key={node.id}>
              <CertificatesPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  );
}

CertificatesPreviewGrid.propTypes = {
  title: PropTypes.string,
  nodes: PropTypes.array,
};

CertificatesPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
};

export default CertificatesPreviewGrid;
