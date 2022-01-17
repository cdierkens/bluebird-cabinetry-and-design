import { render } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

it("matches snapshot", () => {
  const { asFragment } = render(
    <Footer
      currentIndex={1}
      views={[]}
      currentView={{
        source: {
          download: "download",
          fullscreen: "fullscreen",
          regular: "regular",
          thumbnail: "thumbnail",
        },
        contractor: "",
        furnitureRefinishing: "",
        interiorDesigner: "",
        software: "",
      }}
      modalProps={{
        isFullscreen: false,
      }}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
