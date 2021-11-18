import BlockContent from "@sanity/block-content-to-react";
import clsx from "clsx";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Layout from "../Layout";
import { builder } from "../lib";
import { todo } from "../migration.types";

const DesignersPage: React.FC = () => {
  const {
    allSanityDesigner: { nodes: designers },
  } = useStaticQuery(query);

  return (
    <Layout title="Designers">
      <Container className="pb-12">
        {designers.map(
          ({ id, image, name, role, description }: todo, index: todo) => {
            return (
              <section key={id}>
                <Grid>
                  <div
                    className={clsx("col-span-6 col-start-1 md:col-span-2", {
                      "md:col-start-7 md:row-start-1": index % 2 !== 0,
                    })}
                  >
                    <img
                      src={
                        builder.image(image.file.asset.id).url() ?? undefined
                      }
                      className="w-full p-1 shadow-md"
                      alt={image.description}
                    />
                    <p className="text-center text-3xl text-blue-dark mb-0">
                      {name}
                    </p>
                    <p className="text-center mt-0">{role}</p>
                  </div>
                  <div
                    className={clsx("col-span-6 px-4 text-justify", {
                      "md:col-start-1": index % 2 !== 0,
                    })}
                  >
                    <BlockContent blocks={description} />
                  </div>
                </Grid>

                <hr className="my-6 text-blue-dark" />
              </section>
            );
          }
        )}
      </Container>

      <div className="bg-blue-dark text-center">
        <span className="font-sans font-medium text-white text-xl my-9 mx-5 inline-block">
          Are You Interested In Connecting With Us?
        </span>
        <Button variant="white" type="link" to="/contact" className="mb-5 mx-5">
          Let&apos;s Talk
        </Button>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query DesignersQuery {
    allSanityDesigner {
      nodes {
        name
        id
        role
        description {
          children {
            text
            marks
            _key
            _type
          }
          list
          style
          _type
          _key
        }
        image {
          description
          file {
            asset {
              id
            }
          }
        }
      }
    }
  }
`;

export default DesignersPage;
