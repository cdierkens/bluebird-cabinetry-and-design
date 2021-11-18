import React from "react";
import { builder } from "../../../lib/image-url";
import { todo } from "../../../migration.types";
import { PAGE_SIZE } from "../constants";

const IMAGE_WIDTH = 408;
const IMAGE_HEIGHT = 272;
const IMAGE_FIT = "crop";

const url = (image: todo) => {
  return (
    builder
      .image(image.file.asset.id)
      .size(IMAGE_WIDTH, IMAGE_HEIGHT)
      .fit(IMAGE_FIT)
      .url() || undefined
  );
};

interface Image {
  image: todo;
  room: todo;
  cabinetry: todo;
  finish: todo;
  labels: todo;
}

const ImageGrid: React.FC<todo> = ({ images, selectedPage, onClick }) => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {images
          .slice(PAGE_SIZE * selectedPage, PAGE_SIZE * selectedPage + PAGE_SIZE)
          .map(
            (
              { image, labels, room, cabinetry, finish }: Image,
              index: number
            ) => (
              <div key={image.file.asset.id} className="relative">
                <button
                  className="transform hover:scale-105 focus:scale-105 duration-300 p-1 shadow-md focus:outline-none focus:ring bg-white"
                  onClick={() => onClick(index)}
                >
                  <img
                    className="pointer-events-none"
                    src={url(image)}
                    alt={image.description}
                  />

                  <div className="absolute bottom-1 left-1 right-1 text-left flex items-end flex-wrap">
                    {[
                      ...labels,
                      room,
                      ...cabinetry.map((value: string) => `${value} Cabinetry`),
                      ...finish.map((value: string) => `${value} Finish`),
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
            )
          )}
      </div>

      {images.map(({ image }: { image: todo }) => (
        <img
          key={image.file.asset.id}
          className="sr-only"
          src={url(image)}
          alt={image.description}
        />
      ))}
    </>
  );
};

export default ImageGrid;
