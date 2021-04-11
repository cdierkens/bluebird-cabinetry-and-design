import React from "react";
import * as icons from "../icons";
import Layout from "../Layout";

const Icons: React.FC = () => (
  <Layout title="Icons">
    {Object.entries(icons).map(([name, Icon]) => (
      <div className="max-w-screen-lg mx-auto">
        <h2>{name}</h2>
        <div className="grid gap-3 grid-cols-6 items-center p-2">
          <Icon className="h-6" />
          <Icon className="h-8" />
          <Icon className="h-10" />
          <Icon className="h-12" />
          <Icon className="h-16" />
          <Icon className="h-20" />
        </div>

        <hr className="my-6" />

        <div className="grid gap-3 grid-cols-6">
          <Icon className="h-6 bg-gray-light" />
          <Icon className="h-8 bg-gray-light" />
          <Icon className="h-10 bg-gray-light" />
          <Icon className="h-12 bg-gray-light" />
          <Icon className="h-16 bg-gray-light" />
          <Icon className="h-20 bg-gray-light" />
        </div>

        <hr className="my-6" />

        <div className="grid gap-3 grid-cols-6 items-center p-2">
          <Icon className="h-6 bg-blue-dark text-white" />
          <Icon className="h-8 bg-blue-dark text-white" />
          <Icon className="h-10 bg-blue-dark text-white" />
          <Icon className="h-12 bg-blue-dark text-white" />
          <Icon className="h-16 bg-blue-dark text-white" />
          <Icon className="h-20 bg-blue-dark text-white" />
        </div>

        <hr className="my-6" />

        <div className="grid gap-3 grid-cols-6 items-center p-2 bg-blue-dark">
          <Icon className="h-6 text-white" />
          <Icon className="h-8 text-white" />
          <Icon className="h-10 text-white" />
          <Icon className="h-12 text-white" />
          <Icon className="h-16 text-white" />
          <Icon className="h-20 text-white" />
        </div>

        <hr className="my-6" />
      </div>
    ))}
  </Layout>
);

export default Icons;
