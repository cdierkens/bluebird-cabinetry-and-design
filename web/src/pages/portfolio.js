import PropTypes from "prop-types";
import React from "react";
import Button from "../components/Button";
import KindWords from "../components/KindWords";
import PortfolioImages from "../components/PortfolioImages/PortfolioImages";
import Publications from "../components/Publications/Publications";
import Layout from "../Layout";

const PortfolioPage = () => {
  return (
    <Layout title="Portfolio">
      <PortfolioImages />

      <div className="bg-blue-dark text-center">
        <span className="font-sans font-medium text-white text-xl my-9 mx-5 inline-block">
          Get Started On Your Dream Renovations Today!
        </span>
        <Button variant="white" to="/contact" className="mb-5 mx-5">
          Let's Talk
        </Button>
      </div>

      <KindWords />

      <Publications />
    </Layout>
  );
};

PortfolioPage.propTypes = {
  data: PropTypes.object,
  errors: PropTypes.arrayOf(
    PropTypes.shape({
      message: PropTypes.string,
    })
  ),
};

export default PortfolioPage;
