import React from "react";
import Carousel, {
  CarouselStyles,
  Modal,
  ModalGateway as _ModelGateway,
  ViewType,
} from "react-images";
import { theme } from "../../../lib/tailwind";
import { CarouselImage } from "../lib";
import Footer from "./Footer";
import Header from "./Header";
import View from "./View";

interface ImageModalProps {
  lightboxIsOpen: boolean;
  closeLightbox: () => void;
  selectedIndex: number;
  carouselImages: Array<CarouselImage>;
  setSelectedIndex: (index: number) => void;
}

const ModalGateway = _ModelGateway as React.ComponentType<
  React.PropsWithChildren<{}>
>;

const ImageModal: React.FC<React.PropsWithChildren<ImageModalProps>> = ({
  lightboxIsOpen,
  closeLightbox,
  selectedIndex,
  carouselImages,
  setSelectedIndex,
}) => {
  return (
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
            components={{ Header, View, Footer } as any}
            views={carouselImages as any as Array<ViewType>}
            trackProps={{
              onViewChange: setSelectedIndex,
            }}
            styles={carouselStyles}
          />
        </Modal>
      ) : null}
    </ModalGateway>
  );
};

const navButtonStyles = (base: React.CSSProperties) => ({
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

const carouselStyles: CarouselStyles = {
  container: (base) => ({
    ...base,
    height: "100vh",
  }),
  navigationPrev: navButtonStyles,
  navigationNext: navButtonStyles,
};

export default ImageModal;
