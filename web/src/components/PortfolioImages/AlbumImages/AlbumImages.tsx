import React, { useState } from "react";
import { ImageFragment } from "../../../../graphql-types";
import Container from "../../Container";
import { ImageGrid } from "../ImageGrid";
import { ImageModal } from "../ImageModal";
import { mapPortfolioImageToCarouselImage } from "../lib";

type Images = ImageFragment[];

interface AlbumImagesProps {
  title: string;
  images: Images;
}

const AlbumImages: React.FC<AlbumImagesProps> = ({ title, images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false);

  const openLightbox = (index: number) => {
    setSelectedIndex(index);
    setLightboxIsOpen(true);
  };

  const closeLightbox = () => {
    setLightboxIsOpen(false);
  };

  const carouselImages = images.map(mapPortfolioImageToCarouselImage);

  return images.length ? (
    <Container className="mb-6">
      <h3>{title}</h3>
      <ImageGrid
        images={images}
        selectedPage={0}
        onClick={(index: number) => openLightbox(index)}
      />

      <ImageModal
        lightboxIsOpen={lightboxIsOpen}
        closeLightbox={closeLightbox}
        selectedIndex={selectedIndex}
        carouselImages={carouselImages}
        setSelectedIndex={setSelectedIndex}
      />
    </Container>
  ) : null;
};

export default AlbumImages;
