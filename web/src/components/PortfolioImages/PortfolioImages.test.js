import { render } from "@testing-library/react";
import React from "react";
import PortfolioImages from "./PortfolioImages";

it("matches snapshot", () => {
  const { asFragment } = render(
    <PortfolioImages
      allTags={[]}
      allRooms={[]}
      allLabels={[]}
      carouselImages={[]}
      selectedSanityImages={[]}
      selectedTags={[]}
      setSelectedTags={() => void 0}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
