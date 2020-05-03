import { graphql, Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import DesignPreview from "../components/DesignPreview";
import KindWords from "../components/KindWords";
import LearnMore from "../components/LearnMore";
import Publications from "../components/Publications";
import Services from "../components/Services";
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
        <Link to="/getstarted" className={styles.GetStartedLink}>
          Start Here
        </Link>
      </div>

      <DesignPreview />

      <Services />

      <KindWords />

      <Publications />

      <LearnMore />
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
