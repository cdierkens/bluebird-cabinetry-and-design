import PropTypes from "prop-types";
import React from "react";

const View = ({ views, index, modalProps: { isFullscreen } }) => {
  const { source, alt } = views[index];

  return (
    <div
      className="leading-none relative text-center box-border flex items-center justify-center"
      style={{ height: isFullscreen ? "100vh" : "calc(100vh - 90px)" }}
    >
      <img
        className="h-auto max-h-full max-w-full m-auto select-none"
        src={source.regular}
        alt={alt}
      />
    </div>
  );
};

View.propTypes = {
  views: PropTypes.array,
  index: PropTypes.number,
  modalProps: PropTypes.object.isRequired,
};

export default View;
