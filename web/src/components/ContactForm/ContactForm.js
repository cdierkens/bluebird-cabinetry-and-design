import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Alert from "../Alert";
import Button from "../Button";
import Container from "../container";
import Grid from "../Grid";
import Input from "../Input";
import RadioInput from "../RadioInput";
import Select from "../Select";

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string()
    .required("Please enter your email.")
    .email("Please enter a valid email."),
  inquiry: Yup.string().required("Please select an inquiry type."),
  message: Yup.string(),
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
              email: "",
              type: "homeowner",
              inquiry: "",
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
                <Input placeholder="Jane Doe" label="Name" name="name" />
                <Input
                  placeholder="jane@example.com"
                  label="Email"
                  name="email"
                />

                <fieldset className="mb-4">
                  <legend className="text-sm font-sans">
                    I am a...{" "}
                    <span className="sr-only">
                      homeowner or trade professional
                    </span>
                  </legend>

                  <RadioInput value="homeowner" label="Homeowner" name="type" />

                  <RadioInput
                    value="professional"
                    label="Trade Professional"
                    name="type"
                  />
                </fieldset>

                <Select label="Inquiry Type" name="inquiry">
                  <Select.Option value="" disabled>
                    Please select type of inquiry...
                  </Select.Option>
                  <Select.Option value="design">Design Services</Select.Option>
                  <Select.Option value="cabinetry">
                    Cabinetry question
                  </Select.Option>
                  <Select.Option value="other">Other</Select.Option>
                </Select>

                <Input type="textarea" label="Message" name="message" />

                <Field name="username" value="some value" className="sr-only" />

                <div className="flex items-center justify-center mt-4">
                  <Button variant="blue" type="submit">
                    Send
                  </Button>
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
