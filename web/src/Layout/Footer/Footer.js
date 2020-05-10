import { Link } from "gatsby";
import React from "react";
import {
  BirdIcon,
  CkdIcon,
  FacebookIcon,
  HouzzIcon,
  InstagramIcon,
  NkbaIcon,
} from "../../icons";

const Footer = () => (
  <>
    <div className="bg-gray-darker text-center text-gray-light p-5 text-sm leading-loose">
      <div className="my-6">
        <BirdIcon className="h-24 text-white" />
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
      </div>

      <div className="my-6 flex items-center justify-center flex-wrap">
        <a href="/">
          <FacebookIcon className="h-12 text-white" />
        </a>

        <a href="/">
          <InstagramIcon className="h-12 text-white" />
        </a>

        <a href="/" className="underline">
          To The Trade Services
        </a>

        <Link
          to="/contact"
          className="font-body font-semibold rounded-md border-2 border-white text-white py-1 px-9 text-lg inline-block mb-5 mx-5 cursor-pointer hover:bg-gray-darkest my-6"
        >
          Start a Project
        </Link>
      </div>

      <div className="my-6 flex items-center justify-center flex-wrap">
        <a href="/">
          <NkbaIcon className="h-10 text-white" />
        </a>

        <a href="/">
          <CkdIcon className="h-20 text-white" />
        </a>

        <a href="/">
          <HouzzIcon className="h-10 text-white" />
        </a>
      </div>
    </div>
    <div className="bg-gray-darkest px-2 py-6 text-xs text-center text-gray-light">
      &copy; 2020 Bluebird Cabinetry &amp; Design LLC. All Rights Reserved.
    </div>
  </>
);

export default Footer;
