import { render } from "@testing-library/react";
import React from "react";
import View from "./View";

it("matches snapshot", () => {
  const { asFragment } = render(
    <View
      modalProps={{ isFullscreen: false }}
      data={{
        source: {
          download: "download",
          fullscreen: "fullscreen",
          regular: "regular",
          thumbnail: "thumbnail",
        },
        alt: "",
      }}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
