import React from "react";
import Button from "../components/Button";
import Container from "../components/container";
import Grid from "../components/Grid";
import HeartIcon from "../icons/heart.svg";
import MagnifyingGlassIcon from "../icons/magnifying-glass.svg";
import ShieldIcon from "../icons/shield.svg";
import portrait from "../images/dana-portrait.jpg";
import kitchen from "../images/farmhouse-kitchen.jpg";
import Layout from "../Layout";

const AboutPage = () => (
  <Layout title="About">
    <Container className="pb-20">
      <Grid className="gap-8 row-gap-8 items-center">
        <div className="col-span-3 sm:col-span-6 md:col-span-4">
          <h2>Our Story</h2>

          <p>
            Dana, the owner, lost her father to cancer in the later winter of
            2020. Her father was mostly called Bird by his friends, family, and
            close loved ones. A dear friend said “if you are going to start a
            business you should name your company after your father”. This is
            how bluebird came about. After learning more about what the bluebird
            symbolizes the name fell into place with ease, here is what Dana
            discovered about The Bluebird:
          </p>
          <p>
            Bluebird is symbolic of spiritual awakening, transformation, joy,
            contentedness, and hope. It is considered a good omen, predicting
            happy occurences in the coming times. The bluebird is also
            associated with hard work, unassuming confidence, modesty, and
            innocence.
          </p>
        </div>

        <div className="col-span-3 sm:col-span-6 md:col-span-4">
          <img
            src={portrait}
            className="w-full p-1 shadow-md"
            alt="Portrait of Dana Snyder"
          />
        </div>

        <div className="order-last md:order-none col-span-3 sm:col-span-6 md:col-span-4">
          <img
            src={kitchen}
            className="w-full p-1 shadow-md"
            alt="Portrait of Dana Snyder"
          />
        </div>

        <div className="col-span-3 sm:col-span-6 md:col-span-4">
          <h2>Our Purpose</h2>

          <p>
            Bluebird Cabinetry &amp; Design was founded to help people realize
            their dreams of meaningful and inspiring environments in their home.
          </p>

          <p>
            Using our experience and following our core values, we strive to
            help clients achieve their remodeling goals. We believe clients
            should have a positive experience through the entire process of
            turning their homes into safe, functional, and inspiring
            environments.
          </p>
        </div>
      </Grid>
    </Container>

    <div className="py-8 bg-gray-light">
      <h2 className="text-center text-blue-dark">Our Passion &amp; Values</h2>

      <Container className="flex flex-wrap justify-evenly text-center">
        <div className="w-full md:w-1/3 px-9 mt-6">
          <MagnifyingGlassIcon className="fill-none stroke-current stroke-4 mx-auto text-blue-dark h-20" />

          <h3>Details Matter</h3>

          <p className="leading-loose">
            There are many companies that can remodel homes. One of the things
            that sets us apart is our attention to detail. This includes
            understanding the pitfalls and highlights that really influence
            results. The devil really is in the details.
          </p>
        </div>

        <div className="w-full md:w-1/3 px-9 mt-6">
          <ShieldIcon className="fill-none stroke-current stroke-4 mx-auto text-blue-dark h-20" />

          <h3>Integrity</h3>

          <p className="leading-loose">
            The process we use is transparent and we will deliver on our
            promises. Most people have had a bad experience with remodeling, or
            know someone who has. We are upfront about expectations, pricing,
            and treat clients the way we want to be treated.
          </p>
        </div>

        <div className="w-full md:w-1/3 px-9 mt-6">
          <HeartIcon className="fill-none stroke-current stroke-4 mx-auto text-blue-dark h-20" />

          <h3>Community</h3>

          <p className="leading-loose">
            We do what we do to help people create inspiring spaces that bring
            people together. We also strive to build long lasting relationships
            that lead to repeat business and referrals. The community we are a
            part of, and help build, drive us to do what we do.
          </p>
        </div>
      </Container>
    </div>

    <div className="bg-blue-dark text-center">
      <span className="font-sans font-semibold text-white text-xl my-9 mx-5 inline-block">
        See our services page for more details!
      </span>
      <Button variant="white" to="/services" className="mb-5 mx-5">
        Services
      </Button>
    </div>
  </Layout>
);

export default AboutPage;
