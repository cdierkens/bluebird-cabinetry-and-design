import { render } from "@testing-library/react";
import React from "react";
import PortfolioImages from "./PortfolioImages";

it("matches snapshot", () => {
  const { asFragment } = render(
    <PortfolioImages
      allTags={[]}
      carouselImages={[]}
      selectedSanityImages={[]}
      selectedTags={[]}
      setSelectedTags={() => void 0}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
