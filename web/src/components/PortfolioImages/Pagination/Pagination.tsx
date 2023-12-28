import React, { VFC } from "react";
import { ImageFragment } from "../../../../graphql-types";
import { LeftArrowIcon, RightArrowIcon } from "../../../icons";
import { PAGE_SIZE } from "../constants";

type Images = ImageFragment[];

interface PaginationProps {
  images: Images;
  selectedIndex: number;
  handlePagination: (index: number) => void;
}

export const Pagination: VFC<PaginationProps> = ({
  images,
  handlePagination,
  selectedIndex,
}) => {
  const pageCount = Math.floor(images.length / PAGE_SIZE) + 1;
  const selectedPage = Math.floor(selectedIndex / PAGE_SIZE);

  const handlePrevPageClick = () =>
    handlePagination(Math.max(selectedIndex - PAGE_SIZE, 0));

  const handleNextPageClick = () =>
    handlePagination(
      Math.min(
        selectedIndex + PAGE_SIZE,
        Math.floor(images.length / PAGE_SIZE) * PAGE_SIZE
      )
    );

  return images.length > PAGE_SIZE ? (
    <div className="flex items-center justify-center mt-2">
      <button
        onClick={handlePrevPageClick}
        className={`bg-blue-dark text-white rounded-full inline-block w-8 h-8 mr-3 hover:bg-gold cursor-pointer focus:outline-none focus:ring`}
      >
        <LeftArrowIcon className="w-full h-full p-2" />
        <span className="sr-only">Previous Page</span>
      </button>

      {selectedPage > 0 ? (
        <NumberButton index={0} handlePagination={handlePagination} />
      ) : null}

      {selectedPage > 1 ? (
        <NumberButton
          index={selectedPage - 1}
          handlePagination={handlePagination}
        />
      ) : null}

      <NumberButton
        index={selectedPage}
        handlePagination={handlePagination}
        isSelected={true}
      />

      {selectedPage + 1 < pageCount ? (
        <NumberButton
          index={selectedPage + 1}
          handlePagination={handlePagination}
        />
      ) : null}

      {selectedPage + 1 < pageCount - 1 ? (
        <NumberButton
          index={pageCount - 1}
          handlePagination={handlePagination}
        />
      ) : null}

      <button
        onClick={handleNextPageClick}
        className={`bg-blue-dark text-white rounded-full inline-block w-8 h-8 mr-3 hover:bg-gold cursor-pointer focus:outline-none focus:ring`}
      >
        <RightArrowIcon className="w-full h-full p-2" />
        <span className="sr-only">Next Page</span>
      </button>
    </div>
  ) : null;
};

interface NumberButtonProps {
  index: number;
  isSelected?: boolean;
  handlePagination: (index: number) => void;
}

function NumberButton({
  index,
  handlePagination,
  isSelected,
}: NumberButtonProps) {
  return (
    <button
      onClick={() => handlePagination(index * PAGE_SIZE)}
      className={`text-white rounded-full text-center font-medium p-1 inline-block w-8 h-8 mr-3 hover:bg-gold cursor-pointer focus:outline-none focus:ring ${
        isSelected ? "bg-gold" : "bg-blue-dark"
      }`}
    >
      {index + 1}
    </button>
  );
}
