import React from "react";
import Button from "../components/Button";
import Container from "../components/Container";
import Grid from "../components/Grid";
import portrait from "../images/dana-portrait.jpg";
import Layout from "../Layout";

const DesignersPage: React.FC = () => (
  <Layout title="Designers">
    <Container className="pb-12">
      <Grid>
        <div className="col-span-4 sm:col-start-2 md:col-span-2">
          <img
            src={portrait}
            className="w-full p-1 shadow-md"
            alt="Portrait of Dana Snyder"
          />
          <p className="text-center text-3xl text-blue-dark mb-0">
            Dana Snyder
          </p>
          <p className="text-center mt-0">
            Owner / Kitchen &amp; Bathroom Designer
          </p>
        </div>
        <div className="col-span-6 px-4">
          <p>
            Dana Snyder is a custom Kitchen and Bath Designer and a veteran of
            the industry since 2003. She was born and raised in Northwest Ohio.
            Staying close to home she studied business administration at the
            University of Toledo but later switched to Interior Design where her
            interests and academics took off. She graduated at the top of her
            class with an Associate’s Degree in Interior Design from Davis
            College in 2003. She achieved her AKBD (Associate Kitchen and Bath
            Designer) certification from the National Kitchen and Bath
            Association in 2006 and became a CKD (Certified Kitchen Designer) in
            2009.
          </p>

          <p>
            While her focus is kitchen and bathroom design, she enjoys working
            on complete home transformations, lower levels, laundry rooms,
            entertainment centers and custom workspaces. Dana loves working with
            homeowners to create economic and well-planned spaces that
            contribute to the efficiency of busy households.
          </p>

          <p>
            As a member and volunteer of the Southern Ohio &amp; Kentucky
            chapter of the NKBA (National Kitchen &amp; Bath Association) she
            regularly attends educational classes to stay connected with
            technology, smart home features, luxury appliances, finishes, and
            communication. Dana has served the local NKBA chapter in various
            positions including Secretary and Treasurer, Programs Committee
            Chair, and Director of Professional Development.
          </p>
        </div>
      </Grid>

      <hr className="my-6 text-blue-dark" />

      <Grid>
        <div className="col-span-6 px-4">
          <p>
            Dana Snyder is a custom Kitchen and Bath Designer and a veteran of
            the industry since 2003. She was born and raised in Northwest Ohio.
            Staying close to home she studied business administration at the
            University of Toledo but later switched to Interior Design where her
            interests and academics took off. She graduated at the top of her
            class with an Associate’s Degree in Interior Design from Davis
            College in 2003. She achieved her AKBD (Associate Kitchen and Bath
            Designer) certification from the National Kitchen and Bath
            Association in 2006 and became a CKD (Certified Kitchen Designer) in
            2009.
          </p>

          <p>
            While her focus is kitchen and bathroom design, she enjoys working
            on complete home transformations, lower levels, laundry rooms,
            entertainment centers and custom workspaces. Dana loves working with
            homeowners to create economic and well-planned spaces that
            contribute to the efficiency of busy households.
          </p>

          <p>
            As a member and volunteer of the Southern Ohio &amp; Kentucky
            chapter of the NKBA (National Kitchen &amp; Bath Association) she
            regularly attends educational classes to stay connected with
            technology, smart home features, luxury appliances, finishes, and
            communication. Dana has served the local NKBA chapter in various
            positions including Secretary and Treasurer, Programs Committee
            Chair, and Director of Professional Development.
          </p>
        </div>
        <div className="col-span-4 sm:col-start-2 md:col-span-2">
          <img
            src={portrait}
            className="w-full p-1 shadow-md"
            alt="Portrait of Dana Snyder"
          />
          <p className="text-center text-3xl text-blue-dark mb-0">
            Dana Snyder
          </p>
          <p className="text-center mt-0">
            Owner / Kitchen &amp; Bathroom Designer
          </p>
        </div>
      </Grid>

      <hr className="my-6 text-blue-dark" />

      <Grid>
        <div className="col-span-4 sm:col-start-2 md:col-span-2">
          <img
            src={portrait}
            className="w-full p-1 shadow-md"
            alt="Portrait of Dana Snyder"
          />
          <p className="text-center text-3xl text-blue-dark mb-0">
            Dana Snyder
          </p>
          <p className="text-center mt-0">
            Owner / Kitchen &amp; Bathroom Designer
          </p>
        </div>
        <div className="col-span-6 px-4">
          <p>
            Dana Snyder is a custom Kitchen and Bath Designer and a veteran of
            the industry since 2003. She was born and raised in Northwest Ohio.
            Staying close to home she studied business administration at the
            University of Toledo but later switched to Interior Design where her
            interests and academics took off.
          </p>

          <p>
            She graduated at the top of her class with an Associate’s Degree in
            Interior Design from Davis College in 2003. She achieved her AKBD
            (Associate Kitchen and Bath Designer) certification from the
            National Kitchen and Bath Association in 2006 and became a CKD
            (Certified Kitchen Designer) in 2009.
          </p>
        </div>
      </Grid>
    </Container>

    <div className="bg-blue-dark text-center">
      <span className="font-sans font-medium text-white text-xl my-9 mx-5 inline-block">
        Are You Interested In Connecting With Us?
      </span>
      <Button variant="white" type="link" to="/contact" className="mb-5 mx-5">
        Let's Talk
      </Button>
    </div>
  </Layout>
);

export default DesignersPage;
