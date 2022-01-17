import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

it("matches snapshot", () => {
  const { asFragment } = render(
    <Header
      modalProps={{}}
      currentView={{
        source: {
          download: "download",
          fullscreen: "fullscreen",
          regular: "regular",
          thumbnail: "thumbnail",
        },
        title: "",
        contractor: "",
        furnitureRefinishing: "",
        interiorDesigner: "",
        software: "",
      }}
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
