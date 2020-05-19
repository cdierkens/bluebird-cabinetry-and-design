import PropTypes from "prop-types";
import React, { useEffect, useRef } from "react";
import { useKeyPress } from "../../hooks";

const Alert = ({ status, children, onClose }) => {
  const isEscapePressed = useKeyPress("Escape");
  const closeRef = useRef(null);

  useEffect(() => {
    closeRef.current.focus();

    closeRef.current.addEventListener("keydown", (event) => {
      if (event.key === "Tab") {
        event.preventDefault();
      }
    });
  }, [closeRef]);

  useEffect(() => {
    if (isEscapePressed) {
      onClose();
    }
  }, [isEscapePressed, onClose]);

  return (
    <>
      <button
        className="fixed z-30 top-0 right-0 bottom-0 left-0 w-full h-full bg-opacity-50 bg-gray-darker cursor-pointer"
        onClick={onClose}
      >
        <span className="sr-only">Close Alert</span>
      </button>
      <div className="fixed z-40 bottom-0 left-0 right-0 flex justify-center transform -translate-y-6 md:-translate-y-20">
        <div
          className="bg-gold text-white px-4 py-3 pr-12 mx-2 rounded shadow-md relative w-full md:w-auto min-w-1/2"
          role="alert"
        >
          <strong className="font-semibold">
            {status.charAt(0).toUpperCase() + status.slice(1)}{" "}
          </strong>
          <span className="block">{children}</span>
          <button
            className="absolute top-0 bottom-0 right-0 px-3 py-3 text-white hover:text-sand focus:outline-none focus:shadow-outline"
            onClick={onClose}
            ref={closeRef}
          >
            <svg
              className="fill-current h-6 w-6"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close Alert</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

Alert.propTypes = {
  status: PropTypes.oneOf(["success", "error"]).isRequired,
  children: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  onClose: () => {},
};
export default Alert;
