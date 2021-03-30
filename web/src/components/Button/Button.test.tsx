import { render } from "@testing-library/react";
import React from "react";
import Button from "./Button";

it("matches snapshot", () => {
  const { asFragment } = render(<Button />);

  expect(asFragment()).toMatchSnapshot();
});
