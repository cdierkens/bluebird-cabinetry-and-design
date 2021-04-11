import { render } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

it("matches snapshot", () => {
  const { asFragment } = render(<Footer />);

  expect(asFragment()).toMatchSnapshot();
});
