import { render } from "@testing-library/react";
import React from "react";
import Head from "./Head";

it("matches snapshot", () => {
  const { asFragment } = render(<Head />);

  expect(asFragment()).toMatchSnapshot();
});
