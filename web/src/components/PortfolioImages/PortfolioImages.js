import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import Select from "react-select";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import { builder } from "../../lib/image-url";
import Container from "../container";
import Footer from "./Footer";
import Header from "./Header";
import View from "./View";

const PortfolioImages = ({
  allTags,
  carouselImages,
  selectedTags,
  setSelectedTags,
  selectedSanityImages,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const selectedPage = Math.floor(selectedIndex / PAGE_SIZE);

  useEffect(() => {
    if (!query.tags) {
      setQuery({
        tags: tags.join(","),
      });
    }
  }, []); //eslint-disable-line

  const grid = useRef();

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
      <Select
        isMulti
        value={selectedTags.map((tag) => ({
          value: tag,
          label: tag,
        }))}
        options={[
          { value: "all", label: "Show All" },
          { value: "none", label: "Show None" },
          { value: "", label: "", isDisabled: true },
          ...allTags.map((tag) => ({
            value: tag,
            label: tag,
          })),
        ]}
        onChange={(values, ev) => {
          if (ev.action === "select-option" && ev.option.value === "all") {
            setSelectedTags(allTags);
          } else if (
            ev.action === "select-option" &&
            ev.option.value === "none"
          ) {
            setSelectedTags([]);
          } else {
            setSelectedTags(values.map(({ value }) => value));
          }
        }}
      />

      <>
        {selectedSanityImages.map(({ image }) => (
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
        {selectedSanityImages
          .slice(PAGE_SIZE * selectedPage, PAGE_SIZE * selectedPage + PAGE_SIZE)
          .map(({ image }, index) => (
            <div key={image.file.asset.id}>
              <button
                className="transform hover:scale-105 focus:scale-105 duration-300 p-1 shadow-md focus:outline-none focus:ring bg-white"
                onClick={() => openLightbox(index + PAGE_SIZE * selectedPage)}
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
      {selectedSanityImages.length > PAGE_SIZE ? (
        <div className="flex items-center justify-center mt-2">
          <button
            onClick={() =>
              handlePagination(Math.max(selectedIndex - PAGE_SIZE, 0))
            }
            className={`bg-blue-dark text-white rounded-full inline-block w-8 h-8 mr-3 hover:bg-gold cursor-pointer focus:outline-none focus:ring`}
          >
            <LeftArrowIcon className="w-full h-full p-2" />
            <span className="sr-only">Previous Page</span>
          </button>

          {Array.from({
            length: Math.floor(selectedSanityImages.length / PAGE_SIZE) + 1,
          }).map((_, index) => (
            <button
              key={index}
              onClick={() => handlePagination(index * PAGE_SIZE)}
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
                  selectedIndex + PAGE_SIZE,
                  Math.floor(selectedSanityImages.length / PAGE_SIZE) *
                    PAGE_SIZE
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
              views={carouselImages}
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
  allTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  carouselImages: PropTypes.arrayOf(
    PropTypes.shape({
      source: PropTypes.shape({
        download: PropTypes.string,
        fullscreen: PropTypes.string,
        regular: PropTypes.string,
        thumbnail: PropTypes.string,
      }).isRequired,
      caption: PropTypes.string,
      title: PropTypes.string,
      contractor: PropTypes.string,
      furnitureRefinishing: PropTypes.string,
      interiorDesigner: PropTypes.string,
      software: PropTypes.string,
      alt: PropTypes.string,
    }).isRequired
  ),
  selectedSanityImages: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedTags: PropTypes.arrayOf(PropTypes.string).isRequired,
  setSelectedTags: PropTypes.func.isRequired,
};

const { theme } = resolveConfig(tailwindConfig);

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

const PAGE_SIZE = 9;

const carouselStyles = {
  container: (base) => ({
    ...base,
    height: "100vh",
  }),
  navigationPrev: navButtonStyles,
  navigationNext: navButtonStyles,
};

export default PortfolioImages;
