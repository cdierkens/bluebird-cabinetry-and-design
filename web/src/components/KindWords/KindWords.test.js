import { render } from "@testing-library/react";
import React from "react";
import KindWords from "./KindWords";

it("matches snapshot", () => {
  const { asFragment } = render(<KindWords />);

  expect(asFragment()).toMatchSnapshot();
});
