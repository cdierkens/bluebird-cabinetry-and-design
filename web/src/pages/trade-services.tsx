import React from "react";
import Container from "../components/Container";
import ToTheTradeForm from "../components/ToTheTradeForm/ToTheTradeForm";
import Layout from "../Layout";

const TradeServicesPage = () => (
  <Layout title="To the Trade Services">
    <Container className="bg-gray-light py-12 my-12">
      <ToTheTradeForm />
    </Container>
  </Layout>
);

export default TradeServicesPage;
