import { render } from "@testing-library/react";
import React from "react";
import Head from "./Head";

it("matches snapshot", () => {
  const { asFragment } = render(<Head title="Test Title" />);

  expect(asFragment()).toMatchSnapshot();
});
