import PropTypes from "prop-types";
import React from "react";
import { builder } from "../../lib/image-url";
import Container from "../container";
import * as styles from "./DesignPreview.module.css";

const BASE_IMAGE_SIZE = 300;

const DesignPreview = ({ title, description, images }) => {
  return (
    <section className="py-6">
      <Container className={styles.DesignContainer}>
        <h2 className={styles.DesignH2}>{!title || "Design Process"}</h2>
        <p className={styles.DesignText}>
          {!description ||
            "The process we use is transparent and we will deliver on our promises. Most people have had a bad experience with remodeling, or know someone who has. We are upfront about expectations, pricing, and treat clients the way we want to be treated."}
        </p>
      </Container>
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-4 mx-auto content-center justify-center items-center">
          {images.map(({ image, colSpan, rowSpan }) => {
            let width =
              colSpan * BASE_IMAGE_SIZE + Math.max(colSpan - 1, 0) * 16;
            let height =
              rowSpan * BASE_IMAGE_SIZE + Math.max(rowSpan - 1, 0) * 16;

            return (
              <div
                key={image.file.asset.id}
                className={`md:col-span-${colSpan} row-span-${rowSpan} h-full`}
              >
                <img
                  src={builder
                    .image(image.file.asset.id)
                    .size(width, height)
                    .fit("clip")
                    .url()}
                  alt={image.description}
                  className="w-full h-full p-1 shadow-md"
                />
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

DesignPreview.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  images: PropTypes.array,
};

export default DesignPreview;
