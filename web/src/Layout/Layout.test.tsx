import { render } from "@testing-library/react";
import React from "react";
import Layout from "./Layout";

it("matches snapshot", () => {
  const { asFragment } = render(<Layout title="Test Title" />);

  expect(asFragment()).toMatchSnapshot();
});
