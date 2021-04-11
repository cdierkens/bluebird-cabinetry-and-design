import { render } from "@testing-library/react";
import React from "react";
import LearnMore from "./LearnMore";

it("matches snapshot", () => {
  const { asFragment } = render(<LearnMore />);

  expect(asFragment()).toMatchSnapshot();
});
