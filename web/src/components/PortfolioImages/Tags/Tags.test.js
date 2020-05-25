import { render } from "@testing-library/react";
import React from "react";
import Tags from "./Tags";

it("matches snapshot", () => {
  const { asFragment } = render(<Tags tags={[]} />);

  expect(asFragment()).toMatchSnapshot();
});
