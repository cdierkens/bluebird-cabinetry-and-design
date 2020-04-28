import PropTypes from "prop-types";
import React from "react";
import { buildImageObj } from "src/lib/helpers";
import { builder } from "src/lib/image-url";

function CertificatesPreview({ image }) {
  return (
    <div className="certificate-preview">
      {image && image.asset && (
        <img
          src={builder
            .image(buildImageObj(image))
            .width(600)
            .height(Math.floor((9 / 16) * 600))
            .auto("format")
            .url()}
          alt={image.alt}
        />
      )}
    </div>
  );
}

CertificatesPreview.propTypes = {
  image: PropTypes.object,
};

export default CertificatesPreview;
