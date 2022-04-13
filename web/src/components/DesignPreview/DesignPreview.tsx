import { graphql } from "gatsby";
import React from "react";
import { DesignPreviewImageFragment } from "../../../graphql-types";
import { builder } from "../../lib/image-url";
import { invariant } from "../../lib/invariant";
import Container from "../Container";
import * as styles from "./DesignPreview.module.css";

const BASE_IMAGE_SIZE = 300;

export const query = graphql`
  fragment DesignPreview on SanityDesignPreview {
    title
    description
    images {
      ...DesignPreviewImage
    }
  }

  fragment DesignPreviewImage on SanityDesignPreviewImage {
    colSpan
    rowSpan
    image {
      description
      file {
        asset {
          id
        }
      }
    }
  }
`;
interface DesignPreviewProps {
  title: string;
  description: string;
  images: Array<DesignPreviewImageFragment>;
}

const DesignPreview: React.FC<React.PropsWithChildren<DesignPreviewProps>> = ({
  title,
  description,
  images,
}) => {
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
            invariant(image?.file?.asset?.id);
            invariant(image?.file?.asset?.id);
            invariant(colSpan);
            invariant(rowSpan);

            let width =
              parseInt(colSpan, 10) * BASE_IMAGE_SIZE +
              Math.max(parseInt(colSpan, 10) - 1, 0) * 16;
            let height =
              parseInt(rowSpan, 10) * BASE_IMAGE_SIZE +
              Math.max(parseInt(rowSpan, 10) - 1, 0) * 16;

            return (
              <div
                key={image.file.asset.id}
                className={`md:col-span-${colSpan} row-span-${rowSpan} h-full`}
              >
                <img
                  src={
                    builder
                      .image(image.file.asset.id)
                      .size(width, height)
                      .fit("clip")
                      .url() ?? undefined
                  }
                  alt={image.description || undefined}
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

export default DesignPreview;
