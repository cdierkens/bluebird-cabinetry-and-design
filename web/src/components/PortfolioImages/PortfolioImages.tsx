import { graphql, navigate, useStaticQuery } from "gatsby";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  MdFilterList,
  MdKeyboardArrowDown,
  MdKeyboardArrowUp,
} from "react-icons/md";
import useQueryString from "use-query-string";
import { PortfolioImagesQuery } from "../../../graphql-types";
import { isDefined } from "../../lib";
import { invariant } from "../../lib/invariant";
import Button from "../Button";
import Container from "../Container";
import { AlbumImages } from "./AlbumImages";
import { PAGE_SIZE } from "./constants";
import { ImageGrid } from "./ImageGrid";
import { ImageModal } from "./ImageModal";
import {
  getArrayFromQueryParam,
  getValuesForAttribute,
  mapPortfolioImageToCarouselImage,
} from "./lib";
import { Pagination } from "./Pagination/Pagination";
import { SelectInput } from "./SelectInput";

interface PortfolioImagesProps {
  location: Location;
}

const PortfolioImages: React.FC<PortfolioImagesProps> = ({ location }) => {
  const {
    allSanityPortfolioImage: { nodes: allImages },
    allSanityAlbum: { nodes: albums },
  } = useStaticQuery<PortfolioImagesQuery>(portfolioImagesQuery);

  // Note: Library author typed this as an interface instead of a tuple.
  const { 0: query, 1: setQuery } = useQueryString(location, navigate);

  // Show all labels, cabinetry, rooms, and finishes for an empty query string.
  useEffect(() => {
    if (query.labels || query.cabinetry || query.finish || query.room) {
      return;
    }

    setQuery({
      ...query,
      labels: getValuesForAttribute({ allImages, attr: "labels" }),
      cabinetry: getValuesForAttribute({ allImages, attr: "cabinetry" }),
      finish: getValuesForAttribute({ allImages, attr: "finish" }),
      room: getValuesForAttribute({ allImages, attr: "room" }),
    });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const selectedLabels = useMemo(() => {
    return getArrayFromQueryParam(query.labels);
  }, [query.labels]);

  const selectedCabinetry = useMemo(() => {
    return getArrayFromQueryParam(query.cabinetry);
  }, [query.cabinetry]);

  const selectedFinish = useMemo(() => {
    return getArrayFromQueryParam(query.finish);
  }, [query.finish]);

  const selectedRooms = useMemo(() => {
    return getArrayFromQueryParam(query.room);
  }, [query.room]);

  const selectedImages = useMemo(() => {
    return allImages.filter(({ labels, room, cabinetry, finish }) => {
      return (
        selectedLabels.find((selected) =>
          labels?.find((value) => value === selected)
        ) ||
        selectedRooms.find((selected) => selected === room) ||
        selectedCabinetry.find((selected) =>
          cabinetry?.find((value) => value === selected)
        ) ||
        selectedFinish.find((selected) =>
          finish?.find((value) => value === selected)
        )
      );
    });
  }, [
    selectedLabels,
    selectedCabinetry,
    selectedFinish,
    selectedRooms,
    allImages,
  ]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [selectedImages]);

  const carouselImages = selectedImages.map(mapPortfolioImageToCarouselImage);

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
      scrollToRef.current.scrollIntoView({ behavior: "smooth" });
    }

    setSelectedIndex(index);
  };

  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Container className="my-6">
        <h2 ref={scrollToRef}>All Photos</h2>

        <div className="shadow-md p-3 mb-3">
          <Button
            className="w-full text-left text-blue-dark mb-3 flex justify-between items-center px-2 border border-opacity-50 border-gray-dark"
            onClick={() => setShowFilters((value) => !value)}
          >
            <span>
              <MdFilterList className="inline-block mr-2 h-5 w-5" />
              Filters
            </span>

            {showFilters ? (
              <MdKeyboardArrowUp className="h-6 w-6" />
            ) : (
              <MdKeyboardArrowDown className="h-6 w-6" />
            )}
          </Button>
          {showFilters ? (
            <div>
              <SelectInput
                allImages={allImages}
                attribute="room"
                query={query}
                selectedValues={selectedRooms}
                setQuery={setQuery}
              />

              <SelectInput
                allImages={allImages}
                attribute="labels"
                label="tags"
                query={query}
                selectedValues={selectedLabels}
                setQuery={setQuery}
              />

              <SelectInput
                allImages={allImages}
                attribute="cabinetry"
                query={query}
                selectedValues={selectedCabinetry}
                setQuery={setQuery}
              />

              <SelectInput
                allImages={allImages}
                attribute="finish"
                query={query}
                selectedValues={selectedFinish}
                setQuery={setQuery}
              />
            </div>
          ) : null}
        </div>

        <ImageGrid
          images={selectedImages}
          onClick={(index: number) =>
            openLightbox(index + PAGE_SIZE * selectedPage)
          }
          selectedPage={selectedPage}
        />

        <Pagination
          handlePagination={handlePagination}
          selectedIndex={selectedIndex}
          images={selectedImages}
        />

        <ImageModal
          lightboxIsOpen={lightboxIsOpen}
          closeLightbox={closeLightbox}
          selectedIndex={selectedIndex}
          carouselImages={carouselImages}
          setSelectedIndex={setSelectedIndex}
        />
      </Container>

      {albums.length ? (
        <Container>
          <h2>Project Photos</h2>
          {albums.map(({ title, images }) => {
            invariant(title);
            invariant(images);

            return (
              <AlbumImages
                key={title}
                images={images.filter(isDefined)}
                title={title}
              />
            );
          })}
        </Container>
      ) : null}
    </>
  );
};

export const portfolioImagesQuery = graphql`
  fragment Image on SanityPortfolioImage {
    cabinetry
    caption
    contractor
    decorator
    finish
    furnitureRefinishing
    interiorDesigner
    labels
    room
    software
    title
    image {
      description
      file {
        asset {
          id
          gatsbyImageData(
            height: 360
            width: 640
            fit: CROP
            placeholder: BLURRED
          )
        }
      }
    }
  }
  query PortfolioImages {
    allSanityPortfolioImage {
      nodes {
        ...Image
      }
    }
    allSanityAlbum {
      nodes {
        images {
          ...Image
        }
        title
      }
    }
  }
`;

export default PortfolioImages;
