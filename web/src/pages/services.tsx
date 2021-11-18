import { Link } from "gatsby";
import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Grid from "../components/Grid";
import {
  AspectCabinetryIcon,
  EclipseCabinetryIcon,
  JKCabinetryIcon,
  ShilowCabinetryIcon,
} from "../icons";
import rendering from "../images/services-rendering.png";
import Layout from "../Layout";

interface ListItemProp {
  title: string;
}

const ListItem: React.FC<ListItemProp> = ({ title, children }) => (
  <li>
    <span className="text-blue-dark text-2xl font-medium">{title}</span>
    <p>{children}</p>
  </li>
);

interface DesignProcessItemProps {
  title: string;
  number: string;
}

const DesignProcessItem: React.FC<DesignProcessItemProps> = ({
  title,
  number,
  children,
}) => {
  return (
    <div className="bg-white relative mt-16 p-8 px-24 shadow-md">
      <span className="absolute top-0 left-0 text-4xl text-blue-dark py-4 px-6">
        {number}
      </span>

      <h3>{title}</h3>

      <p className="leading-loose">{children}</p>
    </div>
  );
};

const ServicesPage: React.FC = () => (
  <Layout title="Services">
    <Container className="pb-16">
      <Grid>
        <div className="col-span-3 sm:col-span-6 md:col-span-3 md:col-start-2 mb-16 md:mb-0">
          <img
            className="w-full p-1 shadow-md"
            src={rendering}
            alt="Rendering"
          />
        </div>

        <div className="col-span-3 sm:col-span-6 md:col-span-3 ">
          <ul className="relative pl-10 list-disc text-blue-dark">
            <ListItem title="Cabinetry Design &amp; Sales" />
            <ListItem title="Remodeling">
              <p className="text-gray-darkest">
                Whole Home Renovations, Kitchens, Bathrooms, Laundry Rooms,
                Lower Levels, Office Spaces, Beverage Centers, and Entertainment
                Spaces.
              </p>
            </ListItem>
            <ListItem title="3D Drafting">
              <p className="text-gray-darkest">
                Drafting &amp; Modeling renderings using 2020 Kitchen &amp;
                Bathroom Design Software.
              </p>
            </ListItem>
            <ListItem title="Space Planning and Layout" />
            <ListItem title="Selections">
              <p className="text-gray-darkest">
                Appliances, Countertops, Plumbing Fixtures, Lighting Fixtures,
                Cabinet Hardware, and Tile.
              </p>
            </ListItem>
          </ul>
        </div>
      </Grid>
    </Container>

    <div className="bg-gray-light py-16">
      <Container>
        <h2 className="text-center col-span-3 sm:col-span-6 md:col-span-8 text-blue-dark">
          Design Process
        </h2>

        <DesignProcessItem title="Initial Meeting" number="1">
          The initial appointment takes 1 ½ - 2 ½ hours and consists of an
          initial interview about the spaces you would like to improve.
          Measurements will be taken at that time and a questionnaire filled out
          to get in depth knowledge of how you want to improve your spaces.
        </DesignProcessItem>

        <DesignProcessItem
          title="Design Review &amp; Cabinet Selections"
          number="2"
        >
          Before the design process can start a signed contract must be
          submitted to the designer. At the design review we will look at 1-3
          options for a layout and gain access to computer generated images of
          the space(s). We will start to make specific selections of finishes,
          door styles, accessories, and other items.
        </DesignProcessItem>

        <DesignProcessItem title="Material Selections" number="3">
          At this appointment we will select all other materials such as
          countertops, plumbing fixtures, lighting fixtures, tile, hardware, or
          any other types of materials used in your project. This will happen at
          various local preferred showrooms.
        </DesignProcessItem>

        <DesignProcessItem title="Final Design Review" number="4">
          This appointment happens at the client&apos;s home or the cabinetry
          showroom. We will comb through the intricate details of the design. If
          desired, we can look at each space and decide how we can use specialty
          storage and accessories, what fits, and what can be forgotten. We will
          make minor changes to the design to accept these details and review
          some of the costs involved.
        </DesignProcessItem>

        <p className="text-center mt-12 text-sm">
          <Link className="mx-2 underline" to="/trade-services">
            To The Trade Services
          </Link>
        </p>
      </Container>
    </div>

    <div className="bg-blue-dark text-center">
      <Container>
        <span className="font-sans font-medium text-white text-xl my-9 mx-5 inline-block">
          Are You Interested In Connecting With Us?
        </span>
        <Button variant="white" type="link" to="/contact" className="mb-5 mx-5">
          Let&apos;s Talk
        </Button>
      </Container>
    </div>

    <Container className="pt-16 pb-24">
      <h2 className="text-center text-blue-dark">Material Sources</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center justify-center text-center">
        <a href="https://www.shilohcabinetry.com/">
          <ShilowCabinetryIcon className="h-16" />
        </a>
        <a href="https://www.aspectcabinetry.com/">
          <AspectCabinetryIcon className="h-16" />
        </a>
        <a href="http://www.jkcabinetohio.com/">
          <JKCabinetryIcon className="h-16" />
        </a>
        <a href="https://www.eclipsecabinetry.com/">
          <EclipseCabinetryIcon className="h-16" />
        </a>
      </div>
    </Container>
  </Layout>
);

export default ServicesPage;
