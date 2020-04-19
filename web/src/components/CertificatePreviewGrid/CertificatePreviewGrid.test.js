import { render } from "@testing-library/react";
import React from "react";
import CertificatePreviewGrid from "./CertificatePreviewGrid";

it("matches snapshot", () => {
  const { asFragment } = render(<CertificatePreviewGrid />);

  expect(asFragment()).toMatchSnapshot();
});
