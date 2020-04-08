import React from "react";
import { buildImageObj } from "src/lib/helpers";
import { imageUrlFor } from "src/lib/image-url";

function CertificatesPreview(props) {
  return (
    <div className="certificate-preview">
      {props.image && props.image.asset && (
        <img
          src={imageUrlFor(buildImageObj(props.image))
            .width(600)
            .height(Math.floor((9 / 16) * 600))
            .auto("format")
            .url()}
          alt={props.image.alt}
        />
      )}
    </div>
  );
}

export default CertificatesPreview;
