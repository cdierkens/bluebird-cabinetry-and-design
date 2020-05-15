import PropTypes from "prop-types";
import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "../Button";
import Container from "../container";

const KindWordsItem = ({ title, children, name }) => (
  <div className="leading-relaxed text-center px-2 max-w-screen-md mx-auto">
    <div className="relative w-full h-full flex justify-center items-center flex-col border border-gray-light rounded-md px-3 py-3 pt-6  mb-12 shadow-md">
      {title && (
        <span className="leading-none font-sans text-3xl bg-white absolute top-0 inset-x-auto transform -translate-y-1/2 px-4">
          &ldquo;{title}&rdquo;
        </span>
      )}
      <p className="m-0 mb-1">{children}</p>
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
  const [showReadMore, setShowMore] = useState(true);

  return (
    <Container className={`py-6 ${className}`}>
      <h2 className="text-center">Kind Words</h2>

      <KindWordsItem title="Beautiful!" name="Melissa Knapp">
        Dana is amazing at what she does!! We went into our plan with some small
        idea of what we wanted our kitchen remodel to look like, but Dana
        brought it to life!! We are overjoyed with the design and all of the
        specialty things she added. Her knowledge about
        cabinets/tile/countertops was fabulous and really helped in the guidance
        of our Beautiful new kitchen layout!! We highly recommend Dana Snyder!
      </KindWordsItem>

      <KindWordsItem title="Amazing!" name="Kelly Rodriguez">
        Dana helped us remodel our kitchen and we then carried that over to our
        living room. She was amazing! She helped us coordinate and order
        everything and gave us plenty of samples of every decision there was to
        be made!
      </KindWordsItem>

      <KindWordsItem title="Talented!" name="Katie Gillespie">
        Dana has helped with some upgrades in our kitchen, would definitely use
        her talent again on future home projects!
      </KindWordsItem>

      {!showReadMore && (
        <>
          <KindWordsItem title="Functional!" name="Jessica Snyder">
            I bought a home in the Mason area. It had a small kitchen with an
            awkward layout. Dana designed a beautiful kitchen for me. Maximizing
            every inch of storage, she made the space much more functional.
          </KindWordsItem>

          <KindWordsItem title="Thorough!" name="Dan DeStefano">
            On behalf of myself and my brother Rocky deStefano, we would highly
            recommend Dana for all of your cabinet design, and material needs.
            Dana, has done a lot of great work for us and our clients and she's
            very thorough and professional. Thanks Dana for all the great work!
          </KindWordsItem>

          <KindWordsItem title="Detail Oriented!" name="Jeff Cann">
            I am a remodeling contractor who has worked with Dana for the past
            several years. She is very thorough and detail oriented when
            designing kitchen and bathroom plans. She works with each client to
            customize their wants and needs. I enjoy working with Dana and
            highly recommend her for your next project.
          </KindWordsItem>

          <KindWordsItem title="Highly Recommended!" name="Tara Beismann">
            Dana helped us with our basement bar area and we could not be more
            pleased. She designed a new layout and helped us pick all of the
            finishes. Her ideas and attention to detail by far exceeded the
            expectations we had for the space. I'm in love with how it turned
            out! We would highly recommend Dana!!
          </KindWordsItem>

          <KindWordsItem title="Detail Oriented!" name="Michelle Schwiegeraht">
            We highly recommend Dana for all your remodeling projects. She gives
            great attention to detail and really listens to her clients ideas
            &amp; needs. She helped redesign our kitchen, including the removal
            of load bearing walls and switching the layout to make it more
            functional. She also completely revamped our basement bar area to
            accommodate a larger crowd when entertaining. She provided cabinet
            &amp; hardware samples and even helped us pick out our granite. She
            made the process run smoothly from beginning to end.
          </KindWordsItem>

          <KindWordsItem title="Sophisticated!" name="Anita Dock">
            Dana Snyder is an incredibly talented designer. She was able to
            transform the space in our bathroom to much more usable space.
            Having two separate sink areas is so wonderful. Then there are all
            the details that define the space that make the en suite
            sophisticated and elegant. We feel like we are in a vacation in our
            own home, staying at the most beautiful resort. Dana is so talented.
            Not only can she think outside-of-the-box, but she helps every step
            of the way. Her personality makes it such a fun experience. I also
            appreciate her calming and even-keeled personality that make you
            know that everything is going to turn out amazing. We had so much
            fun doing the en suite, we wanted to work with Dana again, so she is
            designing the kitchen of our dreams now.
          </KindWordsItem>
        </>
      )}

      {showReadMore && (
        <div className="text-center">
          <Button
            type="button"
            variant="blue"
            onClick={() => setShowMore(false)}
          >
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

KindWords.defaultProps = {
  className: "",
};

export default KindWords;
