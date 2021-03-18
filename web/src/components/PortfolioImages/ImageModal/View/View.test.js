import { render } from "@testing-library/react";
import React from "react";
import View from "./View";

it("matches snapshot", () => {
  const { asFragment } = render(
    <View
      isFullScreen={false}
      modalProps={{}}
      index={0}
      views={[{ source: "", alt: "" }]}
      label="mock label"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
