import React from "react";
import Button from "../components/Button";
import KindWords from "../components/KindWords";
import PortfolioImages from "../components/PortfolioImages";
import Publications from "../components/Publications";
import Layout from "../Layout";
import { PagePropsWithErrors } from "../migration.types";

const PortfolioPage: React.FC<PagePropsWithErrors> = ({ location }) => {
  return (
    <Layout title="Portfolio">
      <PortfolioImages location={location} />

      <div className="bg-blue-dark text-center">
        <span className="font-sans font-medium text-white text-xl my-9 mx-5 inline-block">
          Are You Interested In Connecting With Us?
        </span>
        <Button variant="white" type="link" to="/contact" className="mb-5 mx-5">
          Let&apos;s Talk
        </Button>
      </div>

      <KindWords />

      <Publications />
    </Layout>
  );
};

export default PortfolioPage;
