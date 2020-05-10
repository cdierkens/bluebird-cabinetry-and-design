import React from "react";
import { BestIcon, ShilowCabinetryIcon } from "../../icons";
import Container from "../container";
import Grid from "../Grid";

const Publications = () => {
  return (
    <div className="bg-blue-dark py-6">
      <Container>
        <h2 className="text-center text-white m-0 mb-3">Publications</h2>

        <Grid>
          <div className="col-span-3 sm:col-span-2 md:col-start-2 text-center mt-3">
            <ShilowCabinetryIcon className="text-white h-16 mb-1" />

            <span className="font-sans text-lg text-white font-bold block">
              2017 National
              <br />
              Shiloh Brochure
            </span>
          </div>

          <div className="col-span-3 sm:col-span-2 text-center mt-3">
            <BestIcon className="text-white h-16 mb-1" />

            <span className="font-sans text-lg text-white font-bold block">
              BEST Fine Homes
              <br />
              Magazine
            </span>
          </div>

          <div className="col-span-3 sm:col-span-2 text-center mt-3">
            <ShilowCabinetryIcon className="text-white h-16 mb-1" />

            <span className="font-sans text-lg text-white font-bold block">
              2019 National
              <br />
              Shiloh Brochure
            </span>
          </div>
        </Grid>
      </Container>
    </div>
  );
};

export default Publications;
