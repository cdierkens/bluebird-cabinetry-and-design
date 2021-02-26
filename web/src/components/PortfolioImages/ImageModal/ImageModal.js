import PropTypes from "prop-types";
import React from "react";
import Carousel, { Modal, ModalGateway } from "react-images";
import { theme } from "../constants";
import Footer from "../Footer";
import Header from "../Header";
import View from "../View";

const ImageModal = ({
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
  );
};

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

const carouselStyles = {
  container: (base) => ({
    ...base,
    height: "100vh",
  }),
  navigationPrev: navButtonStyles,
  navigationNext: navButtonStyles,
};

ImageModal.propTypes = {
  lightboxIsOpen: PropTypes.bool,
  closeLightbox: PropTypes.func,
  selectedIndex: PropTypes.number,
  carouselImages: PropTypes.arrayOf(PropTypes.object),
  setSelectedIndex: PropTypes.func,
};

export default ImageModal;
