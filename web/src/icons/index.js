import PropTypes from "prop-types";
import React from "react";
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

const baseClass = "p-1 fill-current stroke-current inline-block";
const iconBaseClass = "fill-none stroke-3";
const roundedBaseClass = "rounded-full";

// Bluebird
export const BirdIcon = ({ className }) => (
  <Bird className={`${baseClass} ${className}`} />
);
export const LogoIcon = ({ className }) => (
  <Logo className={`${baseClass} ${className}`} />
);

// Cabinetry Logos
export const AspectCabinetryIcon = ({ className }) => (
  <AspectCabinetry className={`${baseClass} ${className}`} />
);

export const EclipseCabinetryIcon = ({ className }) => (
  <EclipseCabinetry className={`${baseClass} ${className}`} />
);

export const JKCabinetryIcon = ({ className }) => (
  <JKCabinetry className={`${baseClass} ${className}`} />
);

export const ShilowCabinetryIcon = ({ className }) => (
  <ShilowCabinetry className={`${baseClass} ${className}`} />
);

// Other Logos
export const BestIcon = ({ className }) => (
  <Best className={`${baseClass} ${className}`} />
);

export const HouzzIcon = ({ className }) => (
  <Houzz className={`${baseClass} ${className}`} />
);

export const CkdIcon = ({ className }) => (
  <Ckd className={`${baseClass} ${className}`} />
);

export const NkbaIcon = ({ className }) => (
  <Nkba className={`${baseClass} ${className}`} />
);

export const FacebookIcon = ({ className }) => (
  <Facebook className={`${baseClass} ${className}`} />
);

export const InstagramIcon = ({ className }) => (
  <Instagram className={`${baseClass} ${className}`} />
);

// Icons
export const CheckIcon = ({ className }) => (
  <Check className={`${baseClass} ${roundedBaseClass} ${className}`} />
);

export const ConstructionIcon = ({ className }) => (
  <Construction className={`${baseClass} ${iconBaseClass} ${className}`} />
);

export const DesignIcon = ({ className }) => (
  <Design className={`${baseClass} ${iconBaseClass} ${className}`} />
);

export const HeartIcon = ({ className }) => (
  <Heart className={`${baseClass} ${iconBaseClass} ${className}`} />
);

export const LayoutIcon = ({ className }) => (
  <Layout className={`${baseClass} ${iconBaseClass} ${className}`} />
);

export const LeftArrowIcon = ({ className }) => (
  <LeftArrow
    className={`${baseClass} fill-current ${roundedBaseClass} ${className}`}
  ></LeftArrow>
);

export const RightArrowIcon = ({ className }) => (
  <LeftArrow
    className={`${baseClass} fill-current ${roundedBaseClass} transform rotate-180 ${className}`}
  ></LeftArrow>
);

export const MagnifyingGlassIcon = ({ className }) => (
  <MagnifyingGlass className={`${baseClass} ${iconBaseClass} ${className}`} />
);
export const MaterialIcon = ({ className }) => (
  <Material className={`${baseClass} ${iconBaseClass} ${className}`} />
);
export const RemodelIcon = ({ className }) => (
  <Remodel className={`${baseClass} ${iconBaseClass} ${className}`} />
);
export const RenderingIcon = ({ className }) => (
  <Rendering className={`${baseClass} ${iconBaseClass} ${className}`} />
);

export const ShieldIcon = ({ className }) => (
  <Shield className={`${baseClass} ${iconBaseClass} ${className}`} />
);

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: "",
};

AspectCabinetryIcon.defaultProps = defaultProps;
AspectCabinetryIcon.propTypes = propTypes;
BestIcon.defaultProps = defaultProps;
BestIcon.propTypes = propTypes;
BirdIcon.defaultProps = defaultProps;
BirdIcon.propTypes = propTypes;
CheckIcon.defaultProps = defaultProps;
CheckIcon.propTypes = propTypes;
CkdIcon.defaultProps = defaultProps;
CkdIcon.propTypes = propTypes;
ConstructionIcon.defaultProps = defaultProps;
ConstructionIcon.propTypes = propTypes;
DesignIcon.defaultProps = defaultProps;
DesignIcon.propTypes = propTypes;
EclipseCabinetryIcon.defaultProps = defaultProps;
EclipseCabinetryIcon.propTypes = propTypes;
FacebookIcon.defaultProps = defaultProps;
FacebookIcon.propTypes = propTypes;
HeartIcon.defaultProps = defaultProps;
HeartIcon.propTypes = propTypes;
HouzzIcon.defaultProps = defaultProps;
HouzzIcon.propTypes = propTypes;
InstagramIcon.defaultProps = defaultProps;
InstagramIcon.propTypes = propTypes;
JKCabinetryIcon.defaultProps = defaultProps;
JKCabinetryIcon.propTypes = propTypes;
LayoutIcon.defaultProps = defaultProps;
LayoutIcon.propTypes = propTypes;
LeftArrowIcon.defaultProps = defaultProps;
LeftArrowIcon.propTypes = propTypes;
LogoIcon.defaultProps = defaultProps;
LogoIcon.propTypes = propTypes;
MagnifyingGlassIcon.defaultProps = defaultProps;
MagnifyingGlassIcon.propTypes = propTypes;
MaterialIcon.defaultProps = defaultProps;
MaterialIcon.propTypes = propTypes;
NkbaIcon.defaultProps = defaultProps;
NkbaIcon.propTypes = propTypes;
RemodelIcon.defaultProps = defaultProps;
RemodelIcon.propTypes = propTypes;
RenderingIcon.defaultProps = defaultProps;
RenderingIcon.propTypes = propTypes;
RightArrowIcon.defaultProps = defaultProps;
RightArrowIcon.propTypes = propTypes;
ShieldIcon.defaultProps = defaultProps;
ShieldIcon.propTypes = propTypes;
ShilowCabinetryIcon.defaultProps = defaultProps;
ShilowCabinetryIcon.propTypes = propTypes;
