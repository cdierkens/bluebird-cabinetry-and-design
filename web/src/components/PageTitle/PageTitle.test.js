import { render } from "@testing-library/react";
import React from "react";
import PageTitle from "./PageTitle";

it("matches snapshot", () => {
  const { asFragment } = render(<PageTitle />);

  expect(asFragment()).toMatchSnapshot();
});
