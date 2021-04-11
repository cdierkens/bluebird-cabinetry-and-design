import React from "react";
import { todo } from "../../../../migration.types";

const View: React.FC<todo> = ({
  views,
  index,
  modalProps: { isFullscreen },
}) => {
  const { source, alt } = views[index];

  const height = isFullscreen ? "100vh" : "calc(100vh - 90px)";

  return (
    <div
      className="leading-none relative text-center box-border flex items-center justify-center"
      style={{ height }}
    >
      <img
        className="h-auto max-h-full max-w-full m-auto select-none"
        src={source.regular}
        alt={alt}
      />
    </div>
  );
};

export default View;
