import { Link } from "gatsby";
import React from "react";
import Button from "../../components/Button";
import {
  BirdIcon,
  CkdIcon,
  FacebookIcon,
  HouzzIcon,
  NkbaIcon,
} from "../../icons";

const Footer: React.FC<React.PropsWithChildren<unknown>> = () => (
  <>
    <div className="bg-gray-darker text-center text-gray-light p-5 text-sm leading-loose">
      <div className="my-6">
        <BirdIcon className="h-24 text-white stroke-none" />
      </div>

      <div className="my-6">
        <div>
          <a href="tel:1-513-668-4529" className="underline">
            (513) 668‐4529
          </a>
        </div>
        <div>
          <a
            href="mailto:dana@bluebirdcabinetryanddesign.com"
            className="underline text-sm sm:text-base"
          >
            dana@bluebirdcabinetryanddesign.com
          </a>
        </div>
        <div>
          <span className="text-sm sm:text-base">
            Serving the{" "}
            <a
              className="underline"
              href="https://en.wikipedia.org/wiki/Cincinnati_metropolitan_area"
            >
              Greater Cincinnati Ohio Tri-State Area
            </a>
          </span>
        </div>
      </div>

      <div className="my-6 flex items-center justify-center flex-wrap">
        <a
          className="mx-2"
          href="https://www.facebook.com/kitchenandbathdesigner/"
        >
          <FacebookIcon className="h-12 text-white" />
          <span className="sr-only">Facebook</span>
        </a>

        <Link className="mx-2 underline" to="/trade-services">
          To The Trade Services
        </Link>

        <Button
          to="/contact"
          type="link"
          variant="white"
          className="mb-5 mx-5 my-6"
        >
          Contact Us
        </Button>
      </div>

      <div className="my-6 flex items-center justify-center flex-wrap">
        <a className="mx-2" href="https://nkba.org/dana-snyder">
          <NkbaIcon className="h-10 text-white" />
          <span className="sr-only">National Kitchen and Bath Association</span>
        </a>

        <CkdIcon className="mx-2 h-20 text-white" />

        <a
          className="mx-2 px-3"
          href="https://www.houzz.com/professionals/kitchen-and-bath-designers/dana-snyder-ckd-pfvwus-pf~1099041723"
        >
          <HouzzIcon className="h-10 text-white" />
          <span className="sr-only">Houzz</span>
        </a>
      </div>
    </div>
    <div className="bg-gray-darkest px-2 py-6 text-xs text-center text-gray-light">
      &copy; 2020 Bluebird Cabinetry &amp; Design LLC. All Rights Reserved.
    </div>
  </>
);

export default Footer;
