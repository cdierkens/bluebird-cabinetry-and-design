import React from "react";
import CertificatesPreview from "./certificates-preview";

function CertificatesPreviewGrid(props) {
  return (
    <div className="certificates-preview-grid-container">
      {props.title && <h2 className="certificates-headline">{props.title}</h2>}
      <ul className="certificates-grid">
        {props.nodes &&
          props.nodes.map((node) => (
            <li key={node.id}>
              <CertificatesPreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  );
}

CertificatesPreview.defaultProps = {
  title: "",
  nodes: [],
};

export default CertificatesPreviewGrid;
