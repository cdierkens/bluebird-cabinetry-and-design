import { render } from "@testing-library/react";
import React from "react";
import Select from "./Select";

it("matches snapshot", () => {
  const { asFragment } = render(<Select label="mock-label" />);

  expect(asFragment()).toMatchSnapshot();
});
