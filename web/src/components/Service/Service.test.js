import { render } from "@testing-library/react";
import React from "react";
import Service from "./Service";

it("matches snapshot", () => {
  const { asFragment } = render(<Service />);

  expect(asFragment()).toMatchSnapshot();
});
