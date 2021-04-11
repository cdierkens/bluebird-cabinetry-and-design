import { render } from "@testing-library/react";
import React from "react";
import Grid from "./Grid";

it("matches snapshot", () => {
  const { asFragment } = render(<Grid />);

  expect(asFragment()).toMatchSnapshot();
});
