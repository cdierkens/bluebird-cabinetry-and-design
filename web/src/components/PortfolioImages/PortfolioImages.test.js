import { render } from "@testing-library/react";
import React from "react";
import PortfolioImages from "./PortfolioImages";

it("matches snapshot", () => {
  const { asFragment } = render(<PortfolioImages location={{ search: "" }} />);

  expect(asFragment()).toMatchSnapshot();
});
