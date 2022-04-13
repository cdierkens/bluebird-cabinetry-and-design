import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { ImageFragment } from "../../../../graphql-types";
import { invariant } from "../../../lib/invariant";
import { PAGE_SIZE } from "../constants";

type Images = ImageFragment[];

interface ImageGridProps {
  images: Images;
  selectedPage: number;
  onClick: (index: number) => void;
}

const ImageGrid: React.FC<React.PropsWithChildren<ImageGridProps>> = ({
  images,
  selectedPage,
  onClick,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
      {images
        .slice(PAGE_SIZE * selectedPage, PAGE_SIZE * selectedPage + PAGE_SIZE)
        .map(({ image, labels, room, cabinetry, finish }, index: number) => {
          invariant(image?.file?.asset);
          invariant(image.description);
          invariant(labels);
          invariant(cabinetry);
          invariant(finish);

          return (
            <div key={image.file.asset.id} className="relative">
              <button
                className="transform hover:scale-105 focus:scale-105 duration-300 p-1 shadow-md focus:outline-none focus:ring bg-white min-w-full"
                onClick={() => onClick(index)}
                style={{
                  aspectRatio: "16 / 9",
                }}
              >
                <GatsbyImage
                  image={image.file.asset.gatsbyImageData}
                  alt={image.description}
                />
                <div className="absolute bottom-1 left-1 right-1 text-left flex items-end flex-wrap">
                  {[
                    ...labels,
                    room,
                    ...cabinetry.map((value) => `${value} Cabinetry`),
                    ...finish.map((value) => `${value} Finish`),
                  ]
                    .sort()
                    .map((value) => (
                      <span
                        key={value}
                        className="text-xs p-1 bg-blue-dark rounded text-white whitespace-nowrap m-0.5"
                      >
                        {value}
                      </span>
                    ))}
                </div>
              </button>
            </div>
          );
        })}
    </div>
  );
};

export default ImageGrid;
