import { graphql } from "gatsby";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Button from "../components/Button";
import Container from "../components/container";
import KindWords from "../components/KindWords";
import Publications from "../components/Publications/Publications";
import Layout from "../Layout";
import { builder } from "../lib/image-url";

export const query = graphql`
  query PortfolioImages {
    images: allSanityPortfolioImage {
      nodes {
        image {
          description
          file {
            asset {
              id
            }
          }
        }
        tags
      }
    }
  }
`;

const PortfolioPage = ({
  data: {
    images: { nodes: portfolioImages },
  },
  errors,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const images = portfolioImages.map(({ image }) => ({
    src: builder.image(image.file.asset.id).height(768).fit("clip").url(),
  }));

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxIsOpen(true);
  };

  return (
    <Layout title="Portfolio" errors={errors}>
      <Container className="my-6">
        <h2>Photos</h2>
        {/* <Formik initialValues={{ tag: "kitchen" }}>
        <Select label="Room type" name="tag">
          <Select.Option value="kitchen">Kitchen</Select.Option>
          <Select.Option value="bathroom">Bathroom</Select.Option>
          <Select.Option value="other">Other Spaces</Select.Option>
        </Select>
      </Formik> */}

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
          {portfolioImages.map(({ image }, index) => (
            <div key={image.file.asset.id}>
              <button onClick={() => openLightbox(index)}>
                <img
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

          {/* <div>
          <span className="bg-gray-light rounded-full text-center font-medium p-1 inline-block w-8 h-8 mr-3">
            1
          </span>
          <span className="bg-blue-dark text-white rounded-full text-center font-medium p-1 inline-block w-8 h-8 mr-3">
            2
          </span>
          <span className="bg-gray-light rounded-full text-center font-medium p-1 inline-block w-8 h-8 mr-3">
            3
          </span>
        </div> */}
        </div>

        <ModalGateway>
          {lightboxIsOpen ? (
            <Modal onClose={() => setLightboxIsOpen(false)}>
              <Carousel currentIndex={selectedIndex} views={images} />
            </Modal>
          ) : null}
        </ModalGateway>
      </Container>

      <div className="bg-blue-dark text-center">
        <span className="font-sans font-medium text-white text-xl my-9 mx-5 inline-block">
          Get Started On Your Dream Renovations Today!
        </span>
        <Button variant="white" to="/contact" className="mb-5 mx-5">
          Start Here
        </Button>
      </div>

      <KindWords />

      <Publications />
    </Layout>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
};

export default PortfolioPage;
