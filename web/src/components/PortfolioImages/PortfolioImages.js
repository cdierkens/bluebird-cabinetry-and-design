import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useMemo, useRef, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import resolveConfig from "tailwindcss/resolveConfig";
import useQueryString from "use-query-string";
import tailwindConfig from "../../../tailwind.config.js";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import { builder } from "../../lib/image-url";
import Container from "../container";
import Footer from "./Footer";
import Header from "./Header";
import Tags from "./Tags";
import View from "./View";

const PortfolioImages = ({ location }) => {
  const {
    images: { nodes: portfolioImages },
  } = useStaticQuery(portfolioImagesQuery);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const [query, setQuery] = useQueryString(location, (value) => {
    if (typeof window === "object") {
      window.history.pushState(null, window.document.title, value);
    }
  });

  const tags = useMemo(
    () =>
      Array.from(
        portfolioImages.reduce(
          (keys, node) => new Set([...node.tags, ...keys]),
          new Set()
        )
      ).sort(),
    [portfolioImages]
  );

  const grid = useRef();

  const checkedTags = query.tags ? decodeURI(query.tags).split(",") : tags;
  const filteredImages = portfolioImages.filter(({ tags }) =>
    tags.find((tag) => checkedTags.find((checkedTag) => checkedTag === tag))
  );
  const selectedPage = Math.floor(selectedIndex / pageSize);

  const images = filteredImages.map(
    ({
      image,
      caption,
      title,
      contractor,
      furnitureRefinishing,
      interiorDesigner,
      software,
    }) => ({
      source: {
        download: builder.image(image.file.asset.id).url(),
        fullscreen: builder
          .image(image.file.asset.id)
          .height(1080)
          .fit("clip")
          .url(),
        regular: builder
          .image(image.file.asset.id)
          .height(900)
          .fit("clip")
          .url(),
        thumbnail: builder
          .image(image.file.asset.id)
          .height(400)
          .fit("clip")
          .url(),
      },
      caption,
      title,
      contractor,
      furnitureRefinishing,
      interiorDesigner,
      software,
      alt: image.description,
    })
  );

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const handlePagination = (index) => {
    if (index === selectedIndex) {
      return;
    }

    if (grid.current) {
      grid.current.scrollIntoView({ behavior: "smooth" });
    }
    setSelectedIndex(index);
  };

  return (
    <Container className="my-6">
      <h2>Photos</h2>

      <Tags
        tags={tags.map((tag) => ({
          value: tag,
          checked: Boolean(
            checkedTags.find((checkedTag) => checkedTag === tag)
          ),
          onChange: ({ target }) => {
            if (target.checked) {
              setQuery({
                tags: [...checkedTags.map(encodeURI), encodeURI(tag)].join(","),
              });
            } else {
              setQuery({
                tags: checkedTags
                  .filter((checkedTags) => checkedTags !== tag)
                  .map(encodeURI)
                  .join(","),
              });
            }
            setSelectedIndex(0);
          },
        }))}
      />

      <div className="p-1">
        <button
          className="text-blue-dark hover:text-gold text-base m-2"
          onClick={() => setQuery({ tags: tags.map(encodeURI).join(",") })}
        >
          Show All
        </button>
        |
        <button
          className="text-blue-dark hover:text-gold text-base m-2"
          onClick={() => setQuery({ tags: [] })}
        >
          Show None
        </button>
      </div>

      <>
        {filteredImages.map(({ image }) => (
          <img
            key={image.file.asset.id}
            className="sr-only"
            src={builder
              .image(image.file.asset.id)
              .size(408, 272)
              .fit("crop")
              .url()}
            alt={image.description}
          />
        ))}
      </>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6" ref={grid}>
        {filteredImages
          .slice(pageSize * selectedPage, pageSize * selectedPage + pageSize)
          .map(({ image }, index) => (
            <div key={image.file.asset.id}>
              <button
                className="transform hover:scale-105 focus:scale-105 duration-300 p-1 shadow-md focus:outline-none focus:ring bg-white"
                onClick={() => openLightbox(index + pageSize * selectedPage)}
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

      {filteredImages.length > pageSize ? (
        <div className="flex items-center justify-center mt-2">
          <button
            onClick={() =>
              handlePagination(Math.max(selectedIndex - pageSize, 0))
            }
            className={`bg-blue-dark text-white rounded-full inline-block w-8 h-8 mr-3 hover:bg-gold cursor-pointer focus:outline-none focus:ring`}
          >
            <LeftArrowIcon className="w-full h-full p-2" />
            <span className="sr-only">Previous Page</span>
          </button>

          {Array.from({
            length: Math.floor(filteredImages.length / pageSize) + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePagination(index * pageSize)}
              className={`text-white rounded-full text-center font-medium p-1 inline-block w-8 h-8 mr-3 hover:bg-gold cursor-pointer focus:outline-none focus:ring ${
                index === selectedPage ? "bg-gold" : "bg-blue-dark"
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              handlePagination(
                Math.min(
                  selectedIndex + pageSize,
                  Math.floor(filteredImages.length / pageSize) * pageSize
                )
              )
            }
            className={`bg-blue-dark text-white rounded-full inline-block w-8 h-8 mr-3 hover:bg-gold cursor-pointer focus:outline-none focus:ring`}
          >
            <RightArrowIcon className="w-full h-full p-2" />
            <span className="sr-only">Next Page</span>
          </button>
        </div>
      ) : null}

      <ModalGateway>
        {lightboxIsOpen ? (
          <Modal
            closeOnBackdropClick={false}
            onClose={closeLightbox}
            styles={{
              blanket: (base) => ({
                ...base,
                backgroundColor: theme.colors.gray.light,
              }),
              positioner: (base) => ({
                ...base,
                display: "block",
              }),
            }}
          >
            <Carousel
              hideControlsWhenIdle={false}
              currentIndex={selectedIndex}
              components={{ Header, View, Footer }}
              views={images}
              trackProps={{
                onViewChange: setSelectedIndex,
              }}
              styles={carouselStyles}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
};

PortfolioImages.propTypes = {
  location: PropTypes.object.isRequired,
};

const { theme } = resolveConfig(tailwindConfig);

export const portfolioImagesQuery = graphql`
  query PortfolioImages {
    images: allSanityPortfolioImage {
      nodes {
        caption
        contractor
        furnitureRefinishing
        interiorDesigner
        software
        tags
        image {
          description
          file {
            asset {
              id
            }
          }
        }
        title
      }
    }
  }
`;

const navButtonStyles = (base) => ({
  ...base,
  backgroundColor: theme.colors.white,
  boxShadow: theme.boxShadow.md,
  color: theme.colors.gray.darker,

  "&:hover, &:active, &:active": {
    backgroundColor: theme.colors.white,
    color: theme.colors.black,
  },
  "&:focus": {
    boxShadow: theme.boxShadow.outline,
    outline: 0,
  },
});

const pageSize = 9;

const carouselStyles = {
  container: (base) => ({
    ...base,
    height: "100vh",
  }),
  navigationPrev: navButtonStyles,
  navigationNext: navButtonStyles,
};

export default PortfolioImages;
