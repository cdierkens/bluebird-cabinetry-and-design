import { render } from "@testing-library/react";
import React from "react";
import Services from "./Services";

it("matches snapshot", () => {
  const { asFragment } = render(<Services />);

  expect(asFragment()).toMatchSnapshot();
});
