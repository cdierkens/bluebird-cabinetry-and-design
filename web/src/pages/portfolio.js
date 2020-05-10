import React from "react";
import Container from "../components/container";
import KindWords from "../components/KindWords";
import Publications from "../components/Publications/Publications";
import Select from "../components/Select";
import Layout from "../Layout";

const PortfolioPage = () => (
  <Layout title="Portfolio">
    <Container>
      <h2>Room</h2>
      <Select>
        <Select.Option>Option 1 is a really really long option</Select.Option>
        <Select.Option>Option 2</Select.Option>
        <Select.Option>Option 3</Select.Option>
        <Select.Option>Option 4</Select.Option>
        <Select.Option>Option 5</Select.Option>
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
      <span className="font-body font-semibold rounded-md border border-white text-white py-3 px-9 text-xl inline-block mb-5 mx-5 hover:bg-blue-dark  ">
        Start Here
      </span>
    </div>

    <KindWords />

    <Publications />
  </Layout>
);

export default PortfolioPage;
