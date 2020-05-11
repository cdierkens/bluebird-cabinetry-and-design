import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "../../../tailwind.config.js";
import { useMatchMedia } from "../../hooks";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import Button from "../Button";
import Container from "../container";
import Grid from "../Grid";

const { theme } = resolveConfig(tailwindConfig);

const KindWordsItem = ({ title, children, name }) => (
  <div className="relative leading-loose text-center min-w-full sm:min-w-1/2 px-2">
    {title && (
      <span className="leading-none font-sans text-3xl bg-white absolute top-0 inset-x-auto transform -translate-y-1/2 -translate-x-1/2 px-4">
        &ldquo;{title}&rdquo;
      </span>
    )}

    <div className="w-full h-full flex justify-center items-center flex-col border border-gray-light rounded-md px-2 md:px-3 pt-4 py-1">
      <p className="m-0">{children}</p>
      <p className="m-0 italic text-gray-darker">-{name}</p>
    </div>
  </div>
);

KindWordsItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
  name: PropTypes.string,
};

const KindWords = ({ className }) => {
  const isMobile = useMatchMedia(`(max-width: ${theme.screens.sm})`);

  const showReadMore = false;
  const totalItems = 7;
  const pageSize = isMobile ? 1 : 2;

  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [isMobile]);

  return (
    <Container className={`py-16 ${className}`}>
      <h2 className="text-center">Kind Words</h2>

      <Grid className="items-center">
        <div className="flex justify-center">
          <button
            onClick={() => setPage((prevPage) => prevPage - 1)}
            className={`transition-opacity ease-out duration-300 ${
              page > 0 ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            <LeftArrowIcon className="h-10 bg-gray-light text-blue-dark cursor-pointer p-2" />
          </button>
        </div>

        <div className="col-span-6 overflow-hidden pt-3 order-first md:order-none">
          <div
            className="flex transition-transform ease-out duration-300"
            style={{
              transform: `translateX(-${page * 100}%)`,
            }}
          >
            <KindWordsItem title="Recommend!" name="Kelly Rodriguez">
              Dana helped us remodel our kitchen and we then carried that over
              to our living room. She was amazing! She helped us coordinate and
              order everything and gave us plenty of samples of every decision
              there was to be made!
            </KindWordsItem>

            <KindWordsItem title="Beautiful!" name="Katie Gillespie">
              Dana has helped with some upgrades in our kitchen, would
              definitely use her talent again on future home projects!
            </KindWordsItem>

            <KindWordsItem title="Wow!" name="Melissa Knapp">
              Dana is amazing at what she does!! We went into our plan with some
              small idea of what we wanted our kitchen remodel to look like, but
              Dana brought it to life!! We are overjoyed with the design and all
              of the specialty things she added. Her knowledge about
              cabinets/tile/countertops was fabulous and really helped in the
              guidance of our Beautiful new kitchen layout!! We highly recommend
              Dana Snyder!
            </KindWordsItem>

            <KindWordsItem name="Jessica Snyder">
              I bought a home in the Mason area. It had a small kitchen with an
              awkward layout. Dana designed a beautiful kitchen for me.
              Maximizing every inch of storage, she made the space much more
              functional.
            </KindWordsItem>

            <KindWordsItem name="Dan DeStefano">
              On behalf of myself and my brother Rocky deStefano, we would
              highly recommend Dana for all of your cabinet design, and material
              needs. Dana, has done a lot of great work for us and our clients
              and she's very thorough and professional. Thanks Dana for all the
              great work!
            </KindWordsItem>

            <KindWordsItem name="Jeff Cann">
              I am a remodeling contractor who has worked with Dana for the past
              several years. She is very thorough and detail oriented when
              designing kitchen and bathroom plans. She works with each client
              to customize their wants and needs. I enjoy working with Dana and
              highly recommend her for your next project.
            </KindWordsItem>

            <KindWordsItem name="Tara Beismann">
              Dana helped us with our basement bar area and we could not be more
              pleased. She designed a new layout and helped us pick all of the
              finishes. Her ideas and attention to detail by far exceeded the
              expectations we had for the space. I'm in love with how it turned
              out! We would highly recommend Dana!!
            </KindWordsItem>

            {/* <KindWordsItem name="Michelle Schwiegeraht">
              We highly recommend Dana for all your remodeling projects. She
              gives great attention to detail and really listens to her clients
              ideas &amp; needs. She helped redesign our kitchen, including the
              removal of load bearing walls and switching the layout to make it
              more functional. She also completely revamped our basement bar
              area to accommodate a larger crowd when entertaining. She provided
              cabinet &amp; hardware samples and even helped us pick out our
              granite. She made the process run smoothly from beginning to end.
            </KindWordsItem> */}

            {/* <KindWordsItem name="Anita Dock">
              Dana Snyder is an incredibly talented designer. She was able to
              transform the space in our bathroom to much more usable space.
              Having two separate sink areas is so wonderful. Then there are all
              the details that define the space that make the en suite
              sophisticated and elegant. We feel like we are in a vacation in
              our own home, staying at the most beautiful resort. Dana is so
              talented. Not only can she think outside-of-the-box, but she helps
              every step of the way. Her personality makes it such a fun
              experience. I also appreciate her calming and even-keeled
              personality that make you know that everything is going to turn
              out amazing. We had so much fun doing the en suite, we wanted to
              work with Dana again, so she is designing the kitchen of our
              dreams now.
            </KindWordsItem> */}
          </div>
        </div>

        <div className="flex justify-center col-start-6 md:col-start-auto">
          <button
            onClick={() => setPage((prevPage) => prevPage + 1)}
            className={`transition-opacity ease-out duration-300 ${
              page + 1 < totalItems / pageSize
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
          >
            <RightArrowIcon className="h-10 bg-gray-light text-blue-dark cursor-pointer p-2" />
          </button>
        </div>
      </Grid>

      {showReadMore && (
        <div className="text-center" hidden>
          <Button variant="blue" to="/">
            Read More
          </Button>
        </div>
      )}
    </Container>
  );
};

KindWords.propTypes = {
  className: PropTypes.string,
};

export default KindWords;
