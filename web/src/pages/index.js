import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Container from "../components/container";
import { useWindowSize } from "../hooks";
import Layout from "../Layout";
import { builder } from "../lib/image-url";

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
  }
`;

const IndexPage = ({
  data: {
    carousel: { images },
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
    <Layout errors={errors} title="Home">
      {imageSize ? (
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

      <div className="bg-gradient-blue-turquoise text-center">
        <span className="font-sans font-bold text-white text-xl my-9 mx-5 inline-block">
          Get Started On Your Dream Renovations Today!
        </span>
        <span className="font-body font-semibold rounded-md border border-white text-white py-3 px-9 text-xl inline-block mb-5 mx-5 hover:bg-blue-dark  ">
          Start Here
        </span>
      </div>

      <Container className="py-8 grid grid-cols-8">
        <h2 className="text-center text-blue-dark col-span-8">
          Title copy about design style
        </h2>

        <p className="text-center col-span-8 md:col-span-4 md:col-start-3 leading-loose">
          Spicy jalapeno bacon ipsum dolor amet hamburger laborum ea, nisi pork
          loin ham hock sed ribeye. Enim burgdoggen turducken tongue meatloaf
          ground round tenderloin chislic consectetur pancetta.
        </p>
      </Container>

      <div className="py-8 grid grid-cols-12 bg-gray-light">
        <h2 className="text-center text-blue-dark col-span-12">Services</h2>
      </div>

      <div className="py-8 grid grid-cols-8">
        <h2 className="text-center text-blue-dark col-span-8">Kind Words</h2>
      </div>

      <div className="py-8 grid grid-cols-12 bg-blue-dark">
        <h2 className="text-center text-white col-span-12">Publications</h2>
      </div>

      <div className="text-center m-auto">
        <span className="font-sans font-bold text-blue-dark text-xl my-9 mx-5 inline-block">
          Interested in learning more?
        </span>
        <span className="font-body font-semibold rounded-md border border-blue-dark text-dark-blue py-3 px-9 text-xl inline-block mb-5 mx-5 hover:bg-blue-dark hover:text-white">
          Contact Us
        </span>
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
