import React from "react";
import { builder } from "../../../lib/image-url";
import { todo } from "../../../migration.types";
import { PAGE_SIZE } from "../constants";

const ImageGrid: React.FC<todo> = ({ images, selectedPage, onClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {images
        .slice(PAGE_SIZE * selectedPage, PAGE_SIZE * selectedPage + PAGE_SIZE)
        .map(({ image }: { image: todo }, index: number) => (
          <div key={image.file.asset.id}>
            <button
              className="transform hover:scale-105 focus:scale-105 duration-300 p-1 shadow-md focus:outline-none focus:ring bg-white"
              onClick={() => onClick(index)}
            >
              <img
                className="pointer-events-none"
                src={
                  builder
                    .image(image.file.asset.id)
                    .size(408, 272)
                    .fit("crop")
                    .url() ?? undefined
                }
                alt={image.description}
              />
            </button>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
