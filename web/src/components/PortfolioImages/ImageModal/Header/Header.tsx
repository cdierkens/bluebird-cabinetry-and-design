import React from "react";
import { todo } from "../../../../migration.types";

const Header: React.FC<todo> = ({
  currentView: { title },
  modalProps: { onClose, toggleFullscreen, isFullscreen },
}) => {
  if (isFullscreen) {
    return (
      <div>
        {title && (
          <div className="inline absolute z-10 top-6 left-2 text-left px-2 py-1 text-sm rounded bg-black text-gray-light bg-opacity-25">
            <span className="px-1 whitespace-nowrap truncate">{title}</span>
          </div>
        )}

        <div>
          <button
            onClick={toggleFullscreen}
            className="fixed z-50 top-0 right-0 inline-block p-4 m-2 text-gray-light hover:text-gold focus:outline-none focus:ring bg-black bg-opacity-25 rounded"
          >
            <span className="sr-only">Close</span>
            <svg
              role="presentation"
              viewBox="0 0 24 24"
              className="h-6 w-6 fill-current stroke-current"
            >
              <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
            </svg>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-1 md:p-4 bg-gray-light shadow-sm flex justify-between items-center">
      <div className="truncate" style={{ maxWidth: "calc(100% - 80px)" }}>
        {title && (
          <span className="px-1 whitespace-nowrap truncate">{title}</span>
        )}
      </div>
      <div>
        <button
          onClick={toggleFullscreen}
          className="inline-block p-2 hover:text-black text-gray-darker focus:outline-none focus:ring"
        >
          <span className="sr-only">Fullscreen</span>
          <svg
            className="h-6 w-6 fill-current stroke-current"
            role="presentation"
            viewBox="0 0 24 24"
          >
            <path d="M14.016 5.016h4.969v4.969h-1.969v-3h-3v-1.969zM17.016 17.016v-3h1.969v4.969h-4.969v-1.969h3zM5.016 9.984v-4.969h4.969v1.969h-3v3h-1.969zM6.984 14.016v3h3v1.969h-4.969v-4.969h1.969z"></path>
          </svg>
        </button>
        <button
          onClick={onClose}
          className="inline-block p-2 hover:text-black text-gray-darker focus:outline-none focus:ring"
        >
          <span className="sr-only">Close</span>
          <svg
            role="presentation"
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-current stroke-current"
          >
            <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Header;
