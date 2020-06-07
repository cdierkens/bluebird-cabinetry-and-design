import axios from "axios";
import { Field, Form, Formik } from "formik";
import { Link } from "gatsby";
import React, { useState } from "react";
import * as Yup from "yup";
import Alert from "../Alert";
import Button from "../Button";
import Container from "../container";
import Grid from "../Grid";
import Input from "../Input";
import Select from "../Select";

const phoneRegExp = /^\({0,1}\d{3}[-|)]{0,1}\d{3}-{0,1}\d{4}$/;

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  phone: Yup.string().matches(
    phoneRegExp,
    "Please enter a 10 digit phone number"
  ),
  email: Yup.string()
    .required("Please enter your email.")
    .email("Please enter a valid email."),
  message: Yup.string()
    .required("Please enter a message.")
    .min(25, "Please provide more details."),
});

const ContactForm = () => {
  const [response, setResponse] = useState({
    status: "init",
    message: "",
  });

  return (
    <div className="bg-gray-light py-12">
      {response.status !== "init" && response.message && (
        <Alert
          status={response.status}
          onClose={() => setResponse({ status: "init", message: "" })}
        >
          {response.message}
        </Alert>
      )}

      <Container>
        <Grid>
          <p className="col-span-3 sm:col-span-6 md:col-start-2 text-center text-blue-dark">
            Please take a minute to tell us more about yourself and your
            project. We will be in contact soon!
          </p>

          <Formik
            initialValues={{
              name: "",
              phone: "",
              email: "",
              budget: "",
              interest: "",
              message: "",
              username: "",
            }}
            validationSchema={contactSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const { data } = await axios.post(
                  "/.netlify/functions/send-contact-email",
                  values
                );
                resetForm();

                setResponse({
                  status: "success",
                  message: data,
                });
              } catch (error) {
                if (error.response) {
                  const { data } = error.response;

                  if (typeof data === "string") {
                    setResponse({
                      status: "error",
                      message: data,
                    });
                  } else {
                    setResponse({
                      status: "error",
                      message: error.message,
                    });
                  }
                } else {
                  console.error(error);
                }
              }
            }}
          >
            {() => (
              <Form className="block col-span-3 sm:col-span-6 md:col-start-2">
                <Input placeholder="Jane Doe" label="Name*" name="name" />

                <Input
                  placeholder="555-555-5555"
                  label="Phone Number"
                  name="phone"
                />

                <Input
                  placeholder="jane@example.com"
                  label="Email*"
                  name="email"
                />

                <Select label="Budget" name="budget">
                  <Select.Option value="" disabled>
                    Please select a budget...
                  </Select.Option>
                  <Select.Option value="$0 to $10,000">
                    $0 to $10,000
                  </Select.Option>
                  <Select.Option value="$11,000 to $25,000">
                    $11,000 to $25,000
                  </Select.Option>
                  <Select.Option value="$26,000 to $50,000">
                    $26,000 to $50,000
                  </Select.Option>
                  <Select.Option value="$51,000 to $75,000">
                    $51,000 to $75,000
                  </Select.Option>
                  <Select.Option value="$76,000 to $100,000">
                    $76,000 to $100,000
                  </Select.Option>
                  <Select.Option value="$100,000 plus">
                    $100,000 plus
                  </Select.Option>
                </Select>

                <Input
                  placeholder="cabinetry, remodeling, renovations, etc"
                  label="Areas of Interest"
                  name="interest"
                />

                <Input type="textarea" label="Message*" name="message" />

                <Field name="username" value="some value" className="sr-only" />

                <p className="-mt-2 ml-2 text-sm text-blue-dark">
                  Fields marked with * are required.
                </p>

                <div className="flex items-center justify-center mt-4">
                  <Button variant="blue" type="submit">
                    Send
                  </Button>
                </div>
                <div className="text-center text-sm text-blue-dark p-8">
                  If you are a trade professional, see our
                  <Link to="/trade-services"> To The Trade Services </Link>
                  page.
                </div>
              </Form>
            )}
          </Formik>
        </Grid>
      </Container>
    </div>
  );
};

export default ContactForm;
