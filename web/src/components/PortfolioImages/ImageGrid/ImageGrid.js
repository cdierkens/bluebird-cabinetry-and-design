import PropTypes from "prop-types";
import React from "react";
import { builder } from "../../../lib/image-url";
import { PAGE_SIZE } from "../constants";

const ImageGrid = ({ images, selectedPage, onClick }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
      {images
        .slice(PAGE_SIZE * selectedPage, PAGE_SIZE * selectedPage + PAGE_SIZE)
        .map(({ image }, index) => (
          <div key={image.file.asset.id}>
            <button
              className="transform hover:scale-105 focus:scale-105 duration-300 p-1 shadow-md focus:outline-none focus:ring bg-white"
              onClick={() => onClick(index)}
            >
              <img
                className="pointer-events-none"
                src={builder
                  .image(image.file.asset.id)
                  .size(408, 272)
                  .fit("crop")
                  .url()}
                alt={image.description}
              />
            </button>
          </div>
        ))}
    </div>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object),
  selectedPage: PropTypes.number,
  onClick: PropTypes.func,
};

export default ImageGrid;
