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
import Tags from "./Tags/Tags.js";

const { theme } = resolveConfig(tailwindConfig);

export const portfolioImagesQuery = graphql`
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
        caption
        tags
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

  const images = filteredImages.map(({ image, caption }) => ({
    source: {
      download: builder.image(image.file.asset.id).url(),
      fullscreen: builder
        .image(image.file.asset.id)
        .height(1080)
        .fit("clip")
        .url(),
      regular: builder.image(image.file.asset.id).height(900).fit("clip").url(),
      thumbnail: builder
        .image(image.file.asset.id)
        .height(400)
        .fit("clip")
        .url(),
    },
    caption,
    alt: image.description,
  }));

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
              styles={customStyles}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
};

const customStyles = {
  container: (base) => ({
    ...base,
    height: "100vh",
  }),
  navigationPrev: navButtonStyles,
  navigationNext: navButtonStyles,
};

PortfolioImages.propTypes = {
  location: PropTypes.object.isRequired,
};

const Footer = ({ currentIndex, views, modalProps: { isFullscreen } }) => {
  return (
    <div className="absolute bottom-2 right-2 text-right px-2 py-1 text-sm rounded bg-gray-light">
      <span className="sr-only">Image number</span> {currentIndex + 1} of{" "}
      {views.length}
    </div>
  );
};

Footer.propTypes = {
  currentIndex: PropTypes.object.isRequired,
  views: PropTypes.array.isRequired,
  currentView: PropTypes.object.isRequired,
  modalProps: PropTypes.object.isRequired,
};

const View = ({ views, index, modalProps: { isFullscreen } }) => {
  const { source, alt } = views[index];

  return (
    <div
      className="leading-none relative text-center box-border flex items-center justify-center"
      style={{ height: isFullscreen ? "100vh" : "calc(100vh - 90px)" }}
    >
      <img
        className="h-auto max-h-full max-w-full m-auto select-none"
        src={source.regular}
        alt={alt}
      />
    </div>
  );
};

View.propTypes = {
  views: PropTypes.array,
  index: PropTypes.number,
  modalProps: PropTypes.object.isRequired,
};

const Header = ({
  currentView: { caption },
  modalProps: { onClose, toggleFullscreen, isFullscreen },
}) => {
  if (isFullscreen) {
    return (
      <button
        onClick={toggleFullscreen}
        className="fixed z-50 top-0 right-0 inline-block p-4 m-2 text-gray-light hover:text-gold focus:outline-none focus:ring bg-black bg-opacity-25 rounded"
      >
        <span className="sr-only">Close</span>
        <svg
          role="presentation"
          viewBox="0 0 24 24"
          className="h-6 w-6 fill-current stroke-current"
        >
          <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
        </svg>
      </button>
    );
  }

  return (
    <div className="p-1 md:p-4 bg-gray-light shadow-sm flex justify-between items-center">
      <div className="truncate" style={{ maxWidth: "calc(100% - 80px)" }}>
        <span className="px-1 whitespace-nowrap truncate">{caption}</span>
      </div>
      <div>
        <button
          onClick={toggleFullscreen}
          className="inline-block p-2 hover:text-black text-gray-darker focus:outline-none focus:ring"
        >
          <span className="sr-only">Fullscreen</span>
          <svg
            className="h-6 w-6 fill-current stroke-current"
            role="presentation"
            viewBox="0 0 24 24"
          >
            <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
          </svg>
        </button>
        <button
          onClick={onClose}
          className="inline-block p-2 hover:text-black text-gray-darker focus:outline-none focus:ring"
        >
          <span className="sr-only">Close</span>
          <svg
            role="presentation"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current stroke-current"
          >
            <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

Header.propTypes = {
  currentView: PropTypes.object.isRequired,
  modalProps: PropTypes.object.isRequired,
};

export default PortfolioImages;
