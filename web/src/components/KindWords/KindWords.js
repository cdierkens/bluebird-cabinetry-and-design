import PropTypes from "prop-types";
import React from "react";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import Button from "../Button";
import Container from "../container";
import Grid from "../Grid";

const KindWords = ({ className }) => {
  const showArrows = false;
  const showReadMore = false;

  return (
    <Container className={`py-16 ${className}`}>
      <h2 className="text-center">Kind Words</h2>

      <Grid className="items-center my-16">
        <div className="flex justify-center">
          {showArrows && (
            <LeftArrowIcon className="h-10 bg-gray-light text-blue-dark" />
          )}
        </div>

        <div className="relative leading-loose text-center border border-gray-light col-span-3 p-10 rounded-md">
          <span className="font-sans text-4xl bg-white absolute top-0 inset-x-auto transform -translate-y-1/2 -translate-x-1/2 px-4">
            &ldquo;Beautiful&rdquo;
          </span>

          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="m-0 italic text-gray-darker">-Anon B.</p>
        </div>

        <div className="relative leading-loose text-center border border-gray-light col-span-3 p-10 rounded-md">
          <span className="font-sans text-4xl bg-white absolute top-0 inset-x-auto transform -translate-y-1/2 -translate-x-1/2 px-4">
            &ldquo;Beautiful&rdquo;
          </span>

          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="m-0 italic text-gray-darker">-Anon B.</p>
        </div>

        <div className="flex justify-center" hidden>
          {showArrows && (
            <RightArrowIcon className="h-10 bg-gray-light text-blue-dark" />
          )}
        </div>
      </Grid>

      {showReadMore && (
        <div className="text-center" hidden>
          <Button to="/">Read More</Button>
        </div>
      )}
    </Container>
  );
};

KindWords.propTypes = {
  className: PropTypes.string,
};

export default KindWords;
