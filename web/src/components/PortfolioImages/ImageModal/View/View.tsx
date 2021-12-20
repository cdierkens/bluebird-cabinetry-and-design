import React from "react";
import { CommonProps } from "react-images";
import { CarouselImage } from "../../lib";

const View: React.FC<CommonProps> = ({
  views = [],
  currentIndex = 0,
  modalProps,
}) => {
  const { source, alt } = views[currentIndex] as any as CarouselImage;

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
