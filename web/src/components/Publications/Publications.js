import React from "react";
import { BestIcon, ShilowCabinetryIcon } from "../../icons";
import Container from "../container";

const Publications = () => {
  return (
    <div className="bg-blue-dark py-6">
      <Container>
        <h2 className="text-center text-white m-0 mb-3">Publications</h2>

        <div className="flex justify-around flex-wrap lg:w-2/3 m-auto">
          <div className="col-span-2 sm:col-span-3 md:col-start-2 text-center m-3">
            <ShilowCabinetryIcon className="text-white h-16 mb-1" />

            <span className="font-sans text-lg text-white font-medium block">
              2017 National
              <br />
              Shiloh Brochure
            </span>
          </div>

          <div className="col-span-2 sm:col-span-3 text-center m-3">
            <BestIcon className="text-white h-16 mb-1" />

            <span className="font-sans text-lg text-white font-medium block">
              BEST Fine Homes
              <br />
              Magazine
            </span>
          </div>

          <div className="col-span-2 sm:col-span-3 text-center m-3">
            <ShilowCabinetryIcon className="text-white h-16 mb-1" />

            <span className="font-sans text-lg text-white font-medium block">
              2019 National
              <br />
              Shiloh Brochure
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Publications;
