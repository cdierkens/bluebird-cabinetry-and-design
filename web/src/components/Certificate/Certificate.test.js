import { render } from "@testing-library/react";
import React from "react";
import Certificate from "./Certificate";

it("matches snapshot", () => {
  const { asFragment } = render(<Certificate />);

  expect(asFragment()).toMatchSnapshot();
});
