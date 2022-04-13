import { Link } from "gatsby";
import React from "react";
import Container from "../components/Container";
import { BirdIcon } from "../icons";
import Layout from "../Layout";

const NotFoundPage: React.FC<React.PropsWithChildren<unknown>> = () => (
  <Layout title="Page not found">
    <Container>
      <div className="flex items-center justify-center my-8">
        <BirdIcon className="h-48 text-blue-dark stroke-none mr-4" />
        <div className="flex items-center flex-col">
          <p className="text-xl text-blue-dark">
            Sorry! We can&apos;t seem to find the page you were looking for.
          </p>
          <p className=" text-blue-dark">
            Please visit our{" "}
            <Link className="underline" to="/">
              home page
            </Link>
            , read about our{" "}
            <Link className="underline" to="/services">
              services
            </Link>
            , or{" "}
            <Link className="underline" to="/contact">
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </Container>
  </Layout>
);

export default NotFoundPage;
