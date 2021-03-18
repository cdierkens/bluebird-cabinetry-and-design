import PropTypes from "prop-types";
import React from "react";

const Footer = ({
  currentIndex,
  views,
  currentView: {
    contractor,
    decorator,
    furnitureRefinishing,
    interiorDesigner,
    software,
  },
  modalProps: { isFullscreen },
}) => {
  const styles = isFullscreen
    ? "bg-black text-gray-light bg-opacity-25"
    : "bg-gray-light";

  return (
    <div>
      <div
        className={`inline absolute bottom-2 left-2 text-left px-2 py-1 text-sm rounded ${styles}`}
      >
        {contractor && <span className="block">Contractor: {contractor}</span>}

        {interiorDesigner && (
          <span className="block">Interior Designer: {interiorDesigner}</span>
        )}

        {furnitureRefinishing && (
          <span className="block">
            Furniture Refinishing: {furnitureRefinishing}
          </span>
        )}

        {software && <span className="block">Design Software: {software}</span>}

        {decorator && <span className="block">Decorator: {decorator}</span>}
      </div>
      <div
        className={`inline absolute bottom-2 right-2 text-right px-2 py-1 text-sm rounded ${styles}`}
      >
        <span>
          {currentIndex + 1} of {views.length}
        </span>
      </div>
    </div>
  );
};

Footer.propTypes = {
  currentIndex: PropTypes.number.isRequired,
  views: PropTypes.array.isRequired,
  currentView: PropTypes.object.isRequired,
  modalProps: PropTypes.object.isRequired,
};

export default Footer;