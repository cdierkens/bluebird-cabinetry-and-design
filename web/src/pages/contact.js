import React from "react";
import Button from "../components/Button";
import Container from "../components/container";
import Grid from "../components/Grid";
import Input from "../components/Input/Input";
import RadioInput from "../components/RadioInput/RadioInput";
import Select from "../components/Select";
import portrait from "../images/dana-portrait.jpg";
import Layout from "../Layout";

const ContactPage = () => (
  <Layout title="Contact">
    <Container className="pb-12">
      <Grid>
        <div className="col-span-4 sm:col-start-2 md:col-span-2">
          <img
            src={portrait}
            className="w-full"
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
          <p className="mt-0">
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
    </Container>

    <div className="bg-gray-light py-12">
      <Container>
        <Grid>
          <form className="block col-span-3 sm:col-span-6 md:col-start-2">
            <Input
              placeholder="Jane Doe"
              label="Name"
              id="name"
              error="Please provide your name."
            />
            <Input
              placeholder="jane@example.com"
              label="Email"
              id="email"
              value="john@example.com"
            />

            <fieldset className="mb-4">
              <legend className="text-sm font-sans">
                I am a...{" "}
                <span className="sr-only">homeowner or trade professional</span>
              </legend>

              <RadioInput
                value="homeowner"
                label="Homeowner"
                group="type"
                checked={true}
              />
              <RadioInput
                value="professional"
                label="Trade Professional"
                group="type"
              />
            </fieldset>

            <Select label="Inquiry Type">
              <Select.Option value="" disabled selected>
                Please select type of inquiry...
              </Select.Option>
              <Select.Option value="design">Design Services</Select.Option>
              <Select.Option value="cabinetry">
                Cabinetry question
              </Select.Option>
              <Select.Option value="other">Other</Select.Option>
            </Select>

            <Input
              type="textarea"
              label="Message"
              id="message"
              error="Please enter a message."
            />

            <div className="flex items-center justify-center mt-4">
              <Button variant="blue" type="submit">
                Send
              </Button>
            </div>
          </form>
        </Grid>
      </Container>
    </div>
  </Layout>
);

export default ContactPage;
