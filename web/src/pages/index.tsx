import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  DesignPreviewImageFragment,
  IndexPageQueryQuery,
} from "../../graphql-types";
import Button from "../components/Button";
import DesignPreview from "../components/DesignPreview";
import KindWords from "../components/KindWords";
import Publications from "../components/Publications";
import Services from "../components/Services";
import Layout from "../Layout";
import { invariant } from "../lib/invariant";
import { PagePropsWithErrors } from "../migration.types";
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
              gatsbyImageData(
                fit: CROP
                width: 1920
                height: 1080
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
    designPreview: sanityDesignPreview(
      _id: { regex: "/(drafts.|)designPreview/" }
    ) {
      ...DesignPreview
    }
  }
`;

const IndexPage: React.FC<React.PropsWithChildren<PagePropsWithErrors<IndexPageQueryQuery>>> = ({
  data: { carousel, designPreview },
  errors,
}) => {
  const carouselNodes = carousel?.images;
  const designPreviewImages = designPreview?.images;

  const title = designPreview?.title;
  const description = designPreview?.description;

  invariant(carouselNodes);
  invariant(designPreviewImages);
  invariant(title);
  invariant(description);

  return (
    <Layout errors={errors} title="Home" hidePageTitle>
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        swipeable
        useKeyboardArrows
      >
        {carouselNodes.map((node) => {
          const image = node?.image;

          invariant(image?.file?.asset?.gatsbyImageData);
          invariant(image?.file?.asset?.id);
          invariant(image?.description);

          return (
            <div key={image.file.asset.id}>
              <GatsbyImage
                image={image.file.asset.gatsbyImageData}
                alt={image.description}
              />
            </div>
          );
        })}
      </Carousel>

      <div className={styles.GetStartedContainer}>
        <span className={styles.GetStartedText}>
          Are You Interested In Connecting With Us?
        </span>
        <Button type="link" variant="blue" to="/contact" className="mb-5 mx-5">
          Let&apos;s Talk
        </Button>
      </div>

      <DesignPreview
        images={designPreviewImages as Array<DesignPreviewImageFragment>}
        title={title}
        description={description}
      />

      <Services />

      <KindWords />

      <Publications />
    </Layout>
  );
};

export default IndexPage;
