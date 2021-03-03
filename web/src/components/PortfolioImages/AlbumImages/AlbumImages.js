import PropTypes from "prop-types";
import React, { useState } from "react";
import Container from "../../container";
import { ImageGrid } from "../ImageGrid";
import { ImageModal } from "../ImageModal";
import { mapPortfolioImageToCarouselImage } from "../lib";

const AlbumImages = ({ title, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const openLightbox = (index) => {
    setSelectedIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const carouselImages = images.map(mapPortfolioImageToCarouselImage);

  return (
    <Container className="mb-6">
      <h3>{title}</h3>
      <ImageGrid
        images={images}
        selectedPage={0}
        onClick={(index) => openLightbox(index)}
      />

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

AlbumImages.propTypes = {
  title: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.object),
};

export default AlbumImages;
