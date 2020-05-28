import React from "react";
import Container from "../components/container";
import ToTheTradeForm from "../components/ToTheTradeForm/ToTheTradeForm";
import Layout from "../Layout";

const TradeServicesPage = () => (
  <Layout title="To the Trade Services">
    <div className="bg-gray-light">
      <Container>
        <ToTheTradeForm />
      </Container>
    </div>
  </Layout>
);

export default TradeServicesPage;
