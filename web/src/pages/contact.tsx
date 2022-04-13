import React from "react";
import ContactForm from "../components/ContactForm/ContactForm";
import Layout from "../Layout";

const ContactPage: React.FC<React.PropsWithChildren<unknown>> = () => (
  <Layout title="Contact">
    <ContactForm />
  </Layout>
);

export default ContactPage;
