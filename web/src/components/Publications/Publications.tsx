import React from "react";
import { BestIcon, ShilowCabinetryIcon } from "../../icons";
import Container from "../Container";

const Publications: React.FC = () => {
  return (
    <div className="bg-blue-dark py-6">
      <Container>
        <h2 className="text-center text-white m-0 mb-3">Publications</h2>

        <div className="flex justify-around flex-wrap lg:w-2/3 m-auto">
          <div className="col-span-2 sm:col-span-3 md:col-start-2 text-center m-3">
            <a
              className="text-white hover:text-gold inline-block"
              href="/shiloh-brochure-2017.pdf"
            >
              <ShilowCabinetryIcon className="h-16 mb-1" />

              <span className="font-sans text-lg font-medium block">
                2017 National
                <br />
                Shiloh Brochure
              </span>
            </a>
          </div>

          <div className="col-span-2 sm:col-span-3 text-center m-3">
            <a
              className="text-white hover:text-gold inline-block"
              href="/best-fine-homes-magazine-fall-2017.pdf"
            >
              <BestIcon className="h-16 mb-1" />

              <span className="font-sans text-lg font-medium block">
                BEST Fine Homes
                <br />
                Magazine
              </span>
            </a>
          </div>

          <div className="col-span-2 sm:col-span-3 text-center m-3">
            <a
              className="text-white hover:text-gold inline-block"
              href="/shiloh-brochure-2019.pdf"
            >
              <ShilowCabinetryIcon className="h-16 mb-1" />

              <span className="font-sans text-lg font-medium block">
                2019 National
                <br />
                Shiloh Brochure
              </span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Publications;
