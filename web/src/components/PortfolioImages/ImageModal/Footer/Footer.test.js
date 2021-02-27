import { render } from "@testing-library/react";
import React from "react";
import Footer from "./Footer";

it("matches snapshot", () => {
  const { asFragment } = render(
    <Footer
      currentIndex={1}
      views={[]}
      currentView={{
        caption: "",
        contractor: "",
        furnitureRefinishing: "",
        interiorDesigner: "",
        software: "",
      }}
      label="mock label"
    />
  );

  expect(asFragment()).toMatchSnapshot();
});
