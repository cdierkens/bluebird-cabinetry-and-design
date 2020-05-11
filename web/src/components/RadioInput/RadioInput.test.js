import { render } from "@testing-library/react";
import React from "react";
import RadioInput from "./RadioInput";

it("matches snapshot", () => {
  const { asFragment } = render(<RadioInput />);

  expect(asFragment()).toMatchSnapshot();
});
