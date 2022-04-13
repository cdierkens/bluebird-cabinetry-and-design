import React from "react";
import { CommonProps } from "react-images";
import { CarouselImage } from "../../lib";

interface ViewProps extends CommonProps {
  data: CarouselImage;
}

const View: React.FC<React.PropsWithChildren<ViewProps>> = ({ modalProps, data: { source, alt } }) => {
  const height = modalProps?.isFullscreen ? "100vh" : "calc(100vh - 90px)";

  return (
    <div
      className="leading-none relative text-center box-border flex items-center justify-center"
      style={{ height }}
    >
      <img
        className="h-auto max-h-full max-w-full m-auto select-none"
        src={source.regular}
        alt={alt ?? undefined}
      />
    </div>
  );
};

export default View;
