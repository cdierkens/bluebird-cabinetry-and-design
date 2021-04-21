import { render } from "@testing-library/react";
import React from "react";
import Publications from "./Publications";

it("matches snapshot", () => {
  const { asFragment } = render(<Publications />);

  expect(asFragment()).toMatchSnapshot();
});
