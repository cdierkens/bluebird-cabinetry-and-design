import React from "react";
import Container from "../components/container";
import Layout from "../Layout";

const ServicesPage = () => (
  <Layout title="Services">
    <Container className="py-24 grid grid-cols-1 md:grid-cols-8 gap-3">
      <figure className="col-span-1 mb-16 md:mb-0 md:col-span-3 md:col-start-2">
        <img
          className="w-full"
          src="https://via.placeholder.com/458"
          alt="Placeholder"
        />

        <figcaption>3D Drafting Example</figcaption>
      </figure>

      <div className="col-span-1 md:col-span-3">
        <ul className="list-disc pl-10">
          <li>Cabinetry Design &amp; Sales </li>
          <li>
            Remodeling
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dictum vel libero ac mollis. Fusce sollicitudin finibus leo quis
              faucibus. Nullam porttitor sit amet ex.
            </p>
          </li>
          <li>
            3D Drafting
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dictum vel libero ac mollis. Fusce sollicitudin finibus leo quis
              faucibus. Nullam porttitor sit amet ex.
            </p>
          </li>
          <li>Space Planning and Layout</li>
          <li>
            Selections
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              dictum vel libero ac mollis. Fusce sollicitudin finibus leo quis
              faucibus. Nullam porttitor sit amet ex.
            </p>
          </li>
        </ul>
      </div>
    </Container>

    <Container className="grid grid-cols-1 md:grid-cols-8 gap-3">
      <h2 className="text-center col-span-1 md:col-span-8 text-blue-dark">
        Design Process
      </h2>

      <div className="bg-gray-light col-span-1 md:col-span-4 p-10 relative mt-16">
        <h3 className="text-blue-dark">Initial Meeting</h3>

        <span className="absolute top-0 text-gray-darker text-6xl font-bold text-opacity-50 transform -translate-y-1/2">
          1
        </span>

        <p className="leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum
          vel libero ac mollis. Fusce sollicitudin finibus leo quis faucibus.
          Nullam porttitor sit amet ex.
        </p>
      </div>

      <div className="bg-gray-light col-span-1 md:col-span-4 p-10 relative mt-16">
        <h3 className="text-blue-dark">Initial Meeting</h3>

        <span className="absolute top-0 text-gray-darker text-6xl font-bold text-opacity-50 transform -translate-y-1/2">
          2
        </span>

        <p className="leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum
          vel libero ac mollis. Fusce sollicitudin finibus leo quis faucibus.
          Nullam porttitor sit amet ex.
        </p>
      </div>

      <div className="bg-gray-light col-span-1 md:col-span-4 p-10 relative mt-16">
        <h3 className="text-blue-dark">Initial Meeting</h3>

        <span className="absolute top-0 text-gray-darker text-6xl font-bold text-opacity-50 transform -translate-y-1/2">
          3
        </span>

        <p className="leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum
          vel libero ac mollis. Fusce sollicitudin finibus leo quis faucibus.
          Nullam porttitor sit amet ex.
        </p>
      </div>

      <div className="bg-gray-light col-span-1 md:col-span-4 p-10 relative mt-16">
        <h3 className="text-blue-dark">Initial Meeting</h3>

        <span className="absolute top-0 text-gray-darker text-6xl font-bold text-opacity-50 transform -translate-y-1/2">
          4
        </span>

        <p className="leading-loose">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum
          vel libero ac mollis. Fusce sollicitudin finibus leo quis faucibus.
          Nullam porttitor sit amet ex.
        </p>
      </div>
    </Container>

    <div className="bg-gradient-blue-turquoise text-center mt-24 mb-16">
      <span className="font-sans font-bold text-white text-xl my-9 mx-5 inline-block">
        Get Started On Your Dream Renovations Today!
      </span>
      <span className="font-body font-semibold rounded-md border border-white text-white py-3 px-9 text-xl inline-block mb-5 mx-5 hover:bg-blue-dark  ">
        Start Here
      </span>
    </div>

    <Container className="grid grid-cols-1 md:grid-cols-8 gap-3 pb-24">
      <h2 className="text-center col-span-1 md:col-span-8 text-blue-dark">
        Material Sources
      </h2>

      <div className="col-span-1 md:col-span-6 md:col-start-2 flex justify-center items-center md:justify-between flex-col md:flex-row">
        <div className="bg-gray-light w-40 h-40 my-6"></div>
        <div className="bg-gray-light w-40 h-40 my-6"></div>
        <div className="bg-gray-light w-40 h-40 my-6"></div>
        <div className="bg-gray-light w-40 h-40 my-6"></div>
      </div>
    </Container>
  </Layout>
);

export default ServicesPage;
