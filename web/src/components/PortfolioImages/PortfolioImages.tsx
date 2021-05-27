import React, { useRef, useState } from "react";
import Select, { ActionMeta, OptionsType } from "react-select";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import { builder } from "../../lib/image-url";
import { todo } from "../../migration.types";
import Container from "../Container";
import { PAGE_SIZE } from "./constants";
import { ImageGrid } from "./ImageGrid";
import { ImageModal } from "./ImageModal";

const PortfolioImages: React.FC<todo> = ({
  allTags,
  allRooms,
  allLabels,
  carouselImages,
  selectedTags,
  setSelectedTags,
  selectedSanityImages,
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const selectedPage = Math.floor(selectedIndex / PAGE_SIZE);

  const scrollToRef = useRef<HTMLHeadingElement>(null);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const handlePagination = (index: number) => {
    if (index === selectedIndex) {
      return;
    }

    if (scrollToRef.current) {
      scrollToRef?.current?.scrollIntoView({ behavior: "smooth" });
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

  const selectedValue = selectedTags.map((tag: todo) => ({
    id: tag,
    value: tag,
    label: tag,
  }));

  const handleChange = (values: OptionsType<todo>, event: ActionMeta<todo>) => {
    if (event.action === "select-option" && event.option.value === "all") {
      setSelectedTags(allTags);
    } else if (
      event.action === "select-option" &&
      event.option.value === "none"
    ) {
      setSelectedTags([]);
    } else {
      setSelectedTags(values.map(({ value }) => value));
    }

    setSelectedIndex(0);
  };

  const PAGE_COUNT = Math.floor(selectedSanityImages.length / PAGE_SIZE) + 1;

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
      options: allRooms.map((room: todo) => ({
        id: room,
        value: room,
        label: room,
      })),
    },
    {
      label: "Labels",
      options: allLabels.map((label: todo) => ({
        id: label,
        value: label,
        label: label,
      })),
    },
  ];

  return (
    <Container className="my-6">
      <h2 ref={scrollToRef}>All Photos</h2>
      <Select
        isMulti
        value={selectedValue}
        options={options}
        onChange={handleChange}
        className="mb-6"
      />

      {selectedSanityImages.map(({ image }: { image: todo }) => (
        <img
          key={image.file.asset.id}
          className="sr-only"
          src={
            builder
              .image(image.file.asset.id)
              .size(408, 272)
              .fit("crop")
              .url() ?? undefined
          }
          alt={image.description}
        />
      ))}

      <ImageGrid
        images={selectedSanityImages}
        onClick={(index: number) =>
          openLightbox(index + PAGE_SIZE * selectedPage)
        }
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

export default PortfolioImages;
