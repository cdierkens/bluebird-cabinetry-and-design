import { render } from "@testing-library/react";
import React from "react";
import DesignPreview from "./DesignPreview";

it("matches snapshot", () => {
  const { asFragment } = render(
    <DesignPreview
      images={[]}
      title="mock-title"
      description="mock-description"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
