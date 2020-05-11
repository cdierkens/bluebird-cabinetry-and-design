import { render } from "@testing-library/react";
import React from "react";
import Input from "./Input";

it("matches snapshot", () => {
  const { asFragment } = render(<Input />);

  expect(asFragment()).toMatchSnapshot();
});
