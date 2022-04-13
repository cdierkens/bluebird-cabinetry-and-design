import clsx from "clsx";
import React from "react";
import { tw } from "../lib/tailwind";
import AspectCabinetry from "./aspect-cabinetry.svg";
import Best from "./best.svg";
import Bird from "./bird.svg";
import Check from "./check.svg";
import Ckd from "./ckd.svg";
import Construction from "./construction.svg";
import Design from "./design.svg";
import EclipseCabinetry from "./eclipse-cabinetry.svg";
import Facebook from "./facebook.svg";
import Heart from "./heart.svg";
import Houzz from "./houzz.svg";
import Instagram from "./instagram.svg";
import JKCabinetry from "./j-k-cabinetry.svg";
import Layout from "./layout.svg";
import LeftArrow from "./left-arrow.svg";
import Logo from "./logo.svg";
import MagnifyingGlass from "./magnifying-glass.svg";
import Material from "./material.svg";
import Nkba from "./nkba.svg";
import Remodel from "./remodel.svg";
import Rendering from "./rendering.svg";
import Shield from "./shield.svg";
import ShilowCabinetry from "./shilow-cabinetry.svg";

type Icon = React.FC<{
  className?: string;
}>;

const baseClass = tw`p-1 fill-current stroke-current inline-block`;
const iconBaseClass = tw`fill-none stroke-3`;
const roundedBaseClass = tw`rounded-full`;

// Bluebird
export const BirdIcon: Icon = ({ className }) => (
  <Bird className={clsx(baseClass, className)} />
);
export const LogoIcon: Icon = ({ className }) => (
  <Logo className={clsx(baseClass, className)} />
);

// Cabinetry Logos
export const AspectCabinetryIcon: Icon = ({ className }) => (
  <AspectCabinetry className={clsx(baseClass, className)} />
);

export const EclipseCabinetryIcon: Icon = ({ className }) => (
  <EclipseCabinetry className={clsx(baseClass, className)} />
);

export const JKCabinetryIcon: Icon = ({ className }) => (
  <JKCabinetry className={clsx(baseClass, className)} />
);

export const ShilowCabinetryIcon: Icon = ({ className }) => (
  <ShilowCabinetry className={clsx(baseClass, className)} />
);

// Other Logos
export const BestIcon: Icon = ({ className }) => (
  <Best className={clsx(baseClass, className)} />
);

export const HouzzIcon: Icon = ({ className }) => (
  <Houzz className={clsx(baseClass, className)} />
);

export const CkdIcon: Icon = ({ className }) => (
  <Ckd className={clsx(baseClass, className)} />
);

export const NkbaIcon: Icon = ({ className }) => (
  <Nkba className={clsx(baseClass, className)} />
);

export const FacebookIcon: Icon = ({ className }) => (
  <Facebook className={clsx(baseClass, className)} />
);

export const InstagramIcon: Icon = ({ className }) => (
  <Instagram className={clsx(baseClass, className)} />
);

// Icons
export const CheckIcon: Icon = ({ className }) => (
  <Check className={clsx(baseClass, roundedBaseClass, className)} />
);

export const ConstructionIcon: Icon = ({ className }) => (
  <Construction className={clsx(baseClass, iconBaseClass, className)} />
);

export const DesignIcon: Icon = ({ className }) => (
  <Design className={clsx(baseClass, iconBaseClass, className)} />
);

export const HeartIcon: Icon = ({ className }) => (
  <Heart className={clsx(baseClass, iconBaseClass, className)} />
);

export const LayoutIcon: Icon = ({ className }) => (
  <Layout className={clsx(baseClass, iconBaseClass, className)} />
);

export const LeftArrowIcon: Icon = ({ className }) => (
  <LeftArrow
    className={clsx(baseClass, "fill-current", roundedBaseClass, className)}
  ></LeftArrow>
);

export const RightArrowIcon: Icon = ({ className }) => (
  <LeftArrow
    className={clsx(
      baseClass,
      "fill-current transform rotate-180",
      roundedBaseClass,
      className
    )}
  ></LeftArrow>
);

export const MagnifyingGlassIcon: Icon = ({ className }) => (
  <MagnifyingGlass className={clsx(baseClass, iconBaseClass, className)} />
);

export const MaterialIcon: Icon = ({ className }) => (
  <Material className={clsx(baseClass, iconBaseClass, className)} />
);

export const RemodelIcon: Icon = ({ className }) => (
  <Remodel className={clsx(baseClass, iconBaseClass, className)} />
);

export const RenderingIcon: Icon = ({ className }) => (
  <Rendering className={clsx(baseClass, iconBaseClass, className)} />
);

export const ShieldIcon: Icon = ({ className }) => (
  <Shield className={clsx(baseClass, iconBaseClass, className)} />
);
