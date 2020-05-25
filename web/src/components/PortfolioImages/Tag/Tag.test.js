import { render } from "@testing-library/react";
import React from "react";
import Tag from "./Tag";

it("matches snapshot", () => {
  const { asFragment } = render(<Tag label="mock label" />);

  expect(asFragment()).toMatchSnapshot();
});
