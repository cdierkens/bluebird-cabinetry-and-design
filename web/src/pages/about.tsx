import { PortableText } from "@portabletext/react";
import clsx from "clsx";
import { graphql } from "gatsby";
import React from "react";
import { AboutPageQueryQuery } from "../../graphql-types";
import Button from "../components/Button";
import Container from "../components/Container";
import HeartIcon from "../icons/heart.svg";
import MagnifyingGlassIcon from "../icons/magnifying-glass.svg";
import ShieldIcon from "../icons/shield.svg";
import Layout from "../Layout";
import { builder } from "../lib/image-url";
import { invariant } from "../lib/invariant";
import { PagePropsWithErrors } from "../migration.types";

export const query = graphql`
  query AboutPageQuery {
    sanityAboutPage(parent: {}, children: {}) {
      pageSections {
        layout
        content {
          _type
          _key
          list
          style
          children {
            marks
            _key
            _type
            marks
            __typename
            text
          }
        }
        quote
        title
        image {
          description
          file {
            asset {
              id
              gatsbyImageData(
                fit: CROP
                width: 800
                height: 800
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`;

const AboutPage: React.FC<PagePropsWithErrors<AboutPageQueryQuery>> = ({
  data: { sanityAboutPage },
  errors,
}) => {
  return (
    <Layout errors={errors} title="About">
      <Container className="pb-20">
        {sanityAboutPage?.pageSections?.map((section, index) => {
          invariant(section);
          invariant(section.image?.file?.asset);
          invariant(section.content);

          return (
            <div
              key={section.title}
              className={clsx(
                section.layout === "right"
                  ? "md:flex-row-reverse"
                  : "md:flex-row",
                `flex-col flex gap-8 my-8 items-center`
              )}
            >
              <div className="basis-full md:basis-1/2">
                <h2>{section.title}</h2>

                <PortableText value={section.content as any} />

                {section.quote ? (
                  <p className="font-handwriting text-3xl pt-4 p-3 m-0 sm:m-1 bg-gray-light shadow-md text-blue-dark leading-snug">
                    {section.quote}
                  </p>
                ) : null}
              </div>

              <div className="w-full basis-full md:basis-1/2">
                <img
                  src={
                    builder
                      .image(section.image.file.asset.id)
                      .size(800, 800)
                      .fit("clip")
                      .url() ?? undefined
                  }
                  alt={section.image.description || undefined}
                  className="w-full p-1 shadow-md"
                />
              </div>
            </div>
          );
        })}
      </Container>

      <div className="py-8 bg-gray-light">
        <h2 className="text-center text-blue-dark">Our Passion &amp; Values</h2>

        <Container className="flex flex-wrap justify-evenly text-center">
          <div className="w-full md:w-1/3 px-9 mt-6">
            <MagnifyingGlassIcon className="fill-none stroke-current stroke-4 mx-auto text-blue-dark h-20" />

            <h3>Details Matter</h3>

            <p className="leading-loose">
              There are many companies that can remodel homes. One of the things
              that sets us apart is our attention to detail. This includes
              understanding the pitfalls and highlights that really influence
              results. The devil really is in the details.
            </p>
          </div>

          <div className="w-full md:w-1/3 px-9 mt-6">
            <ShieldIcon className="fill-none stroke-current stroke-4 mx-auto text-blue-dark h-20" />

            <h3>Integrity</h3>

            <p className="leading-loose">
              The process we use is transparent and we will deliver on our
              promises. Most people have had a bad experience with remodeling,
              or know someone who has. We are upfront about expectations,
              pricing, and treat clients the way we want to be treated.
            </p>
          </div>

          <div className="w-full md:w-1/3 px-9 mt-6">
            <HeartIcon className="fill-none stroke-current stroke-4 mx-auto text-blue-dark h-20" />

            <h3>Community</h3>

            <p className="leading-loose">
              We do what we do to help people create inspiring spaces that bring
              people together. We also strive to build long lasting
              relationships that lead to repeat business and referrals. The
              community we are a part of, and help build, drive us to do what we
              do.
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-blue-dark text-center">
        <span className="font-sans font-semibold text-white text-xl my-9 mx-5 inline-block">
          See our services page for more details!
        </span>
        <Button
          variant="white"
          type="link"
          to="/services"
          className="mb-5 mx-5"
        >
          Services
        </Button>
      </div>
    </Layout>
  );
};

export default AboutPage;
