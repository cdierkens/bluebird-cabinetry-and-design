import { graphql, useStaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React, { useMemo, useRef, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import resolveConfig from "tailwindcss/resolveConfig";
import useQueryString from "use-query-string";
import tailwindConfig from "../../../tailwind.config.js";
import { builder } from "../../lib/image-url";
import Container from "../container";

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
  color: theme.colors.gray.dark,

  "&:hover, &:active, &:active": {
    backgroundColor: theme.colors.white,
    color: theme.colors.gray.darker,
  },
  "&:focus": {
    boxShadow: theme.boxShadow.outline,
    outline: 0,
  },
});

const Tag = ({ label, onChange, name, value, checked }) => {
  return (
    <label
      className={`cursor-pointer inline-block rounded p-3 m-1 sm:m-2 focus:outline-none focus:shadow-outline shadow-md ${
        checked ? "bg-blue-dark text-white" : "bg-white text-blue-dark"
      }`}
    >
      <input
        className="sr-only"
        type="checkbox"
        onChange={onChange}
        name={name}
        value={value}
        checked={checked}
      />
      <span>{label}</span>
    </label>
  );
};

Tag.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
};

const PortfolioImages = ({ location }) => {
  const {
    images: { nodes: portfolioImages },
  } = useStaticQuery(portfolioImagesQuery);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
  const openedBy = useRef();

  const [query, setQuery] = useQueryString({ pathname: "" }, (value) => {
    if (typeof window === "object") {
      window.history.pushState(
        null,
        window.document.title,
        value.replace(location.pathname)
      );
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

  const checkedTags = query.tags ? decodeURI(query.tags).split(",") : [];

  const images = portfolioImages
    .filter(({ tags }) =>
      tags.find((tag) => checkedTags.find((checkedTag) => checkedTag === tag))
    )
    .map(({ image, caption }) => ({
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
      alt: image.description,
    }));

  const openLightbox = (target, index) => {
    setSelectedIndex(index);
    openedBy.current = target;
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
    if (openedBy.current) {
      openedBy.current.focus();
    }
  };

  return (
    <Container className="my-6">
      <h2>Photos</h2>
      <span className="block text-blue-dark text-base ml-1 mb-1">Tags</span>
      <div className="p-1 shadow-md flex flex-wrap justify-start">
        {tags.map((tag) => (
          <Tag
            name="tags"
            value={tag}
            checked={Boolean(
              checkedTags.find((checkedTag) => checkedTag === tag)
            )}
            onChange={({ target }) => {
              if (target.checked) {
                setQuery({
                  tags: [...checkedTags.map(encodeURI), encodeURI(tag)].join(
                    ","
                  ),
                });
              } else {
                setQuery({
                  tags: checkedTags
                    .filter((checkedTags) => checkedTags !== tag)
                    .map(encodeURI)
                    .join(","),
                });
              }
            }}
            label={tag}
            key={tag}
          />
        ))}
      </div>
      <div className="p-1">
        <button
          className="inline block text-blue-dark hover:text-gold text-base m-2"
          onClick={() => setQuery({ tags: tags.map(encodeURI).join(",") })}
        >
          Show All
        </button>
        |
        <button
          className="inline block text-blue-dark hover:text-gold text-base m-2"
          onClick={() => setQuery({ tags: [] })}
        >
          Show None
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-6">
        {portfolioImages
          .filter(({ tags }) =>
            tags.find((tag) =>
              checkedTags.find((checkedTag) => checkedTag === tag)
            )
          )
          .map(({ image }, index) => (
            <div key={image.file.asset.id}>
              <button
                className="transform hover:scale-105 focus:scale-105 duration-300 p-1 shadow-md focus:outline-none focus:shadow-outline bg-white"
                onClick={({ target }) => openLightbox(target, index)}
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
              components={{ Footer: null, Header, View }}
              views={images}
              styles={{
                container: (base) => ({
                  ...base,
                  height: "100vh",
                }),
                view: (base) => ({
                  ...base,
                  alignItems: "center",
                  display: "flex",
                  padding: theme.padding["6"],
                  height: "calc(100vh - 72px)",
                  justifyContent: "center",
                }),
                navigationPrev: navButtonStyles,
                navigationNext: navButtonStyles,
              }}
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

const View = ({ views, index, modalProps: { isFullscreen } }) => {
  const { source, alt } = views[index];

  return (
    <div
      className="leading-none relative text-center box-border flex items-center justify-center p-1 md:p-4"
      style={{ height: isFullscreen ? "100vh" : "calc(100vh - 72px)" }}
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
        className="fixed z-50 top-0 right-0 inline-block p-4 m-2 text-gray-light hover:text-gold focus:outline-none focus:shadow-outline bg-black bg-opacity-25 rounded"
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
        <span className="px-1 whitespace-no-wrap truncate">{caption}</span>
      </div>
      <div>
        <button
          onClick={toggleFullscreen}
          className="inline-block p-2 text-gray-dark hover:text-gray-darker focus:outline-none focus:shadow-outline"
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
          className="inline-block p-2 text-gray-dark hover:text-gray-darker focus:outline-none focus:shadow-outline"
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
