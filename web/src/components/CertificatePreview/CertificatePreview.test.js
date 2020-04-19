import { render } from "@testing-library/react";
import React from "react";
import CertificatePreview from "./CertificatePreview";

it("matches snapshot", () => {
  const { asFragment } = render(<CertificatePreview />);

  expect(asFragment()).toMatchSnapshot();
});
