import React from "react";
import Container from "../components/container";
import Layout from "../Layout";

const ServicesPage = () => (
  <Layout title="Services">
    <Container className="py-24 grid grid-cols-8">
      <figure className="col-span-3 col-start-2">
        <img src="https://via.placeholder.com/458" alt="Placeholder" />

        <figcaption>3D Drafting Example</figcaption>
      </figure>

      <div className="col-span-3">
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

    <Container className="grid grid-cols-8">
      <h2 className="text-center col-span-8 text-blue-dark">Design Process</h2>

      <div className="bg-gray-light col-span-4">
        <h3>Initial Meeting</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum
          vel libero ac mollis. Fusce sollicitudin finibus leo quis faucibus.
          Nullam porttitor sit amet ex.
        </p>
      </div>

      <div className="bg-gray-light col-span-4">
        <h3>Initial Meeting</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum
          vel libero ac mollis. Fusce sollicitudin finibus leo quis faucibus.
          Nullam porttitor sit amet ex.
        </p>
      </div>
    </Container>
  </Layout>
);

export default ServicesPage;
