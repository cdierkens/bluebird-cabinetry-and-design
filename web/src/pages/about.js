import React from "react";
import Container from "../components/container";
import Grid from "../components/Grid";
import portrait from "../images/dana-portrait.jpg";
import kitchen from "../images/square-kitchen.jpg";
import Layout from "../Layout";

const AboutPage = () => (
  <Layout title="About">
    <Container className="pb-20">
      <Grid className="gap-8 row-gap-8 items-center">
        <div className="col-span-3 sm:col-span-6 md:col-span-4">
          <h2 className="text-blue-dark">Our Story</h2>

          <p>
            Dana, the owner, lost her father to cancer in the later winter of
            2020.Her father was mostly called Bird by his friends, family, and
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
            className="w-full"
            alt="Portrait of Dana Snyder"
          />
        </div>

        <div className="order-last md:order-none col-span-3 sm:col-span-6 md:col-span-4">
          <img src={kitchen} className="w-full" alt="Portrait of Dana Snyder" />
        </div>

        <div className="col-span-3 sm:col-span-6 md:col-span-4">
          <h2 className="text-blue-dark">Our Purpose</h2>

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

    <div className="py-8 grid grid-cols-12 bg-gray-light">
      <h2 className="text-center text-blue-dark col-span-12">
        Our Passion &amp; Values
      </h2>
    </div>

    <div className="bg-gradient-blue-turquoise text-center">
      <span className="font-sans font-bold text-white text-xl my-9 mx-5 inline-block">
        See our services page for more details!
      </span>
      <span className="font-body font-semibold rounded-md border border-white text-white py-3 px-9 text-xl inline-block mb-5 mx-5 hover:bg-blue-dark  ">
        services
      </span>
    </div>
  </Layout>
);

export default AboutPage;
