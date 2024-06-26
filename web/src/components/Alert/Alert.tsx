import { useKeyPress } from "@react-typed-hooks/use-key-press";
import { noop } from "lodash";
import React, { useEffect, useRef } from "react";

const handleCloseKeydown = (event: KeyboardEvent) => {
  if (event.key === "Tab") {
    event.preventDefault();
  }
};

interface AlertProps {
  status: "success" | "error";
  onClose?: () => void;
}

const Alert: React.FC<AlertProps> = ({ status, children, onClose = noop }) => {
  const isEscapePressed = useKeyPress({ targetKey: "Escape" });
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!closeRef.current) {
      return;
    }

    const closeButton = closeRef.current;

    closeButton.focus();
    closeButton.addEventListener("keydown", handleCloseKeydown);

    return () => {
      closeButton.removeEventListener("keydown", handleCloseKeydown);
    };
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
            className="absolute top-0 bottom-0 right-0 px-3 py-3 text-white hover:text-sand focus:outline-none focus:ring"
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

export default Alert;
