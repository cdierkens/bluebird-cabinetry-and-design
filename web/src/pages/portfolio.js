import React from "react";
import Container from "../components/container";
import Grid from "../components/Grid";
import Select from "../components/Select";
import { LeftArrowIcon, RightArrowIcon } from "../icons";
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

    <Container>
      <h2 className="text-center">Projects</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6">
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
        <div className="bg-gray-light h-40 md:h-64"></div>
      </div>
    </Container>

    <div className="bg-gradient-blue-turquoise text-center my-16">
      <span className="font-sans font-bold text-white text-xl my-9 mx-5 inline-block">
        Get Started On Your Dream Renovations Today!
      </span>
      <span className="font-body font-semibold rounded-md border border-white text-white py-3 px-9 text-xl inline-block mb-5 mx-5 hover:bg-blue-dark  ">
        Start Here
      </span>
    </div>

    <Container>
      <h2 className="text-center mb-16">Kind Words</h2>

      <Grid className="items-center">
        <div className="flex justify-center">
          <LeftArrowIcon className="h-10 bg-gray-light text-blue-dark" />
        </div>

        <div className="relative leading-loose text-center border border-gray-light col-span-3 p-10 rounded-md">
          <span className="font-sans text-4xl bg-white absolute top-0 inset-x-auto transform -translate-y-1/2 -translate-x-1/2 px-4">
            &ldquo;Beautiful&rdquo;
          </span>

          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="m-0 italic text-gray-darker">-Anon B.</p>
        </div>

        <div className="relative leading-loose text-center border border-gray-light col-span-3 p-10 rounded-md">
          <span className="font-sans text-4xl bg-white absolute top-0 inset-x-auto transform -translate-y-1/2 -translate-x-1/2 px-4">
            &ldquo;Beautiful&rdquo;
          </span>

          <p className="m-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="m-0 italic text-gray-darker">-Anon B.</p>
        </div>

        <div className="flex justify-center">
          <RightArrowIcon className="h-10 bg-gray-light text-blue-dark" />
        </div>
      </Grid>

      <div className="text-center py-16">
        <span className="text-blue-dark font-body font-semibold rounded-md border border-blue-dark text-dark-blue py-3 px-9 text-xl inline-block mb-5 mx-5 hover:bg-blue-dark hover:text-white">
          Read More
        </span>
      </div>
    </Container>

    <div className="bg-blue-dark py-6">
      <Container>
        <h2 className="text-center text-white">Publications</h2>
      </Container>
    </div>
  </Layout>
);

export default PortfolioPage;
