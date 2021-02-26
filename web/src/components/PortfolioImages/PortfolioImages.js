import PropTypes from "prop-types";
import React, { useRef, useState } from "react";
import Select from "react-select";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import { builder } from "../../lib/image-url";
import Container from "../container";
import { LABEL_NAMES, PAGE_SIZE, ROOM_NAMES } from "./constants.js";
import { ImageGrid } from "./ImageGrid";
import { ImageModal } from "./ImageModal";

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

  const scrollToRef = useRef();

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

    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setSelectedIndex(index);
  };

  const handlePrevPageClick = () =>
    handlePagination(Math.max(selectedIndex - PAGE_SIZE, 0));

  const handleNextPageClick = () =>
    handlePagination(
      Math.min(
        selectedIndex + PAGE_SIZE,
        Math.floor(selectedSanityImages.length / PAGE_SIZE) * PAGE_SIZE
      )
    );

  const selectedValue = selectedTags.map((tag) => ({
    id: tag,
    value: tag,
    label: tag,
  }));

  const handleChange = (values, ev) => {
    if (ev.action === "select-option" && ev.option.value === "all") {
      setSelectedTags(allTags);
    } else if (ev.action === "select-option" && ev.option.value === "none") {
      setSelectedTags([]);
    } else {
      setSelectedTags(values.map(({ value }) => value));
    }
  };

  const PAGE_COUNT = Math.floor(selectedSanityImages.length / PAGE_SIZE) + 1;

  return (
    <Container className="my-6">
      <h2 ref={scrollToRef}>Photos</h2>
      <Select
        isMulti
        value={selectedValue}
        options={options}
        onChange={handleChange}
        className="mb-6"
      />

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

      <ImageGrid
        images={selectedSanityImages}
        onClick={(index) => openLightbox(index + PAGE_SIZE * selectedPage)}
        selectedPage={selectedPage}
      />

      {selectedSanityImages.length > PAGE_SIZE ? (
        <div className="flex items-center justify-center mt-2">
          <button
            onClick={handlePrevPageClick}
            className={`bg-blue-dark text-white rounded-full inline-block w-8 h-8 mr-3 hover:bg-gold cursor-pointer focus:outline-none focus:ring`}
          >
            <LeftArrowIcon className="w-full h-full p-2" />
            <span className="sr-only">Previous Page</span>
          </button>

          {Array.from({
            length: PAGE_COUNT,
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
            onClick={handleNextPageClick}
            className={`bg-blue-dark text-white rounded-full inline-block w-8 h-8 mr-3 hover:bg-gold cursor-pointer focus:outline-none focus:ring`}
          >
            <RightArrowIcon className="w-full h-full p-2" />
            <span className="sr-only">Next Page</span>
          </button>
        </div>
      ) : null}

      <ImageModal
        lightboxIsOpen={lightboxIsOpen}
        closeLightbox={closeLightbox}
        selectedIndex={selectedIndex}
        carouselImages={carouselImages}
        setSelectedIndex={setSelectedIndex}
      />
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

const options = [
  {
    label: "Show All/None",
    options: [
      { id: "all", value: "all", label: "Show All" },
      { id: "none", value: "none", label: "Show None" },
    ],
  },
  {
    label: "Rooms",
    options: ROOM_NAMES.map((room) => ({
      id: room,
      value: room,
      label: room,
    })),
  },
  {
    label: "Labels",
    options: LABEL_NAMES.map((label) => ({
      id: label,
      value: label,
      label: label,
    })),
  },
];

export default PortfolioImages;
