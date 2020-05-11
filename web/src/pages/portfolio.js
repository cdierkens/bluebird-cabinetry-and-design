import React from "react";
import Button from "../components/Button";
import Container from "../components/container";
import KindWords from "../components/KindWords";
import Publications from "../components/Publications/Publications";
import Select from "../components/Select";
import Layout from "../Layout";

const PortfolioPage = () => (
  <Layout title="Portfolio">
    <Container>
      <h2>Room</h2>
      <Select label="Room type">
        <Select.Option value="kitchen">Kitchen</Select.Option>
        <Select.Option value="bathroom">Bathroom</Select.Option>
        <Select.Option value="other">Other</Select.Option>
      </Select>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>

        <div>
          <span className="bg-gray-light rounded-full text-center font-semibold p-1 inline-block w-8 h-8 mr-3">
            1
          </span>
          <span className="bg-blue-dark text-white rounded-full text-center font-semibold p-1 inline-block w-8 h-8 mr-3">
            2
          </span>
          <span className="bg-gray-light rounded-full text-center font-semibold p-1 inline-block w-8 h-8 mr-3">
            3
          </span>
        </div>
      </div>
    </Container>

    <Container className="py-16">
      <h2 className="text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
      </div>
    </Container>

    <div className="bg-gradient-blue-turquoise text-center">
      <span className="font-sans font-bold text-white text-xl my-9 mx-5 inline-block">
        Get Started On Your Dream Renovations Today!
      </span>
      <Button variant="white" to="/contact" className="mb-5 mx-5">
        Start Here
      </Button>
    </div>

    <KindWords />

    <Publications />
  </Layout>
);

export default PortfolioPage;
