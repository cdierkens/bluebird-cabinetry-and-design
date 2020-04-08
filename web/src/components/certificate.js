import React from "react";
import { buildImageObj } from "src/lib/helpers";
import { imageUrlFor } from "src/lib/image-url";

function Certificate(props) {
  const { _rawBody, title, image, description } = props;
  return (
    <div className="certificate-container">
      {image && image.asset && (
        <div className="certificate">
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
      )}
    </div>
  );
}

export default Certificate;
