import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DesignPreview from "../components/DesignPreview";
import { useWindowSize } from "../hooks";
import Layout from "../Layout";
import { builder } from "../lib/image-url";
import styles from "./Index.module.css";

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
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
  }
`;

const IndexPage = ({
  data: {
    site,
    carousel: { images },
  },
  errors,
}) => {
  if (!site) {
    throw new Error('Missing "Site settings".');
  }

  const { width, height } = useWindowSize();

  return (
    <Layout
      errors={errors}
      title={site.title}
      description={site.description}
      keywords={site.keywords}
    >
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showThumbs={false}
        swipeable
        useKeyboardArrows
      >
        {images.map(({ image }) => (
          <div key={image.file.asset.id}>
            <img
              src={builder
                .image(image.file.asset.id)
                .size(width || 1366, (height || 768) - 102)
                .fit("clip")
                .url()}
              alt={image.description}
            />
          </div>
        ))}
      </Carousel>

      <div className={styles.GetStartedContainer}>
        <span className={styles.GetStartedText}>
          Get Started On Your Dream Renovations Today!
        </span>
        <span className={styles.GetStartedLink}>Start Here</span>
      </div>

      <DesignPreview />

      <div className={styles.ServicesContainer}>
        <h2 className={styles.ServicesH2}>Services</h2>
      </div>

      <div className={styles.KindWordsContainer}>
        <h2 className={styles.KindWordsH2}>Kind Words</h2>
      </div>

      <div className={styles.PublicationsContainer}>
        <h2 className={styles.PublicationsH2}>Publications</h2>
      </div>

      <div className={styles.LearnMoreContainer}>
        <span className={styles.LearnMoreText}>
          Interested in learning more?
        </span>
        <span className={styles.LearnMoreLink}>Contact Us</span>
      </div>
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
