import { render } from "@testing-library/react";
import React from "react";
import Select from "./Select";

it("matches snapshot", () => {
  const { asFragment } = render(<Select />);

  expect(asFragment()).toMatchSnapshot();
});
