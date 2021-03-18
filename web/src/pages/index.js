import { useWindowSize } from "@react-typed-hooks/use-window-size";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../components/Button";
import DesignPreview from "../components/DesignPreview";
import KindWords from "../components/KindWords";
import Publications from "../components/Publications";
import Services from "../components/Services";
import Layout from "../Layout";
import { builder } from "../lib/image-url";
import * as styles from "./Index.module.css";

export const query = graphql`
  query IndexPageQuery {
    carousel: sanityCarousel(_id: { regex: "/(drafts.|)homeCarousel/" }) {
      images {
        image {
          description
          file {
            asset {
              id
            }
          }
        }
      }
    }
    designPreview: sanityDesignPreview(
      _id: { regex: "/(drafts.|)designPreview/" }
    ) {
      title
      description
      images {
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
    }
  }
`;

const IndexPage = ({
  data: {
    carousel: { images: carouselImages },
    designPreview: { title, description, images: designPreviewImages },
  },
  errors,
}) => {
  const [imageSize, setImageSize] = useState();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (!windowSize) {
      return;
    }

    if (!imageSize) {
      setImageSize(windowSize);
      return;
    }

    const tolerance = 100;
    if (
      Math.abs(windowSize.height - imageSize.height) > tolerance ||
      Math.abs(windowSize.width - imageSize.width) > tolerance
    ) {
      setImageSize(windowSize);
    }
  }, [windowSize, imageSize]);

  return (
    <Layout errors={errors} title="Home" hidePageTitle>
      {imageSize ? (
        <Carousel
          autoPlay
          infiniteLoop
          showStatus={false}
          showThumbs={false}
          swipeable
          useKeyboardArrows
          style={{ height: `${imageSize.height - 102}px` }}
        >
          {carouselImages.map(({ image }) => (
            <div key={image.file.asset.id}>
              <img
                src={builder
                  .image(image.file.asset.id)
                  .size(imageSize.width, imageSize.height - 102)
                  .fit("clip")
                  .url()}
                alt={image.description}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <Carousel showStatus={false} showThumbs={false}>
          <span>Loading...</span>
        </Carousel>
      )}

      <div className={styles.GetStartedContainer}>
        <span className={styles.GetStartedText}>
          Are You Interested In Connecting With Us?
        </span>
        <Button variant="blue" to="/contact" className="mb-5 mx-5">
          Let's Talk
        </Button>
      </div>

      <DesignPreview
        images={designPreviewImages}
        title={title}
        description={description}
      />

      <Services />

      <KindWords />

      <Publications />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
};

export default IndexPage;
