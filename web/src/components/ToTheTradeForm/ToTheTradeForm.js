import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";
import Alert from "../Alert";
import Button from "../Button";
import Container from "../container";
import Grid from "../Grid";
import Input from "../Input";

const phoneRegExp = /^\({0,1}\d{3}[-|)]{0,1}\d{3}-{0,1}\d{4}$/;

const contactSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your business name."),
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

const ToTheTradeForm = () => {
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
            Please take a minute to tell us more about your business. We will
            get back with you shortly.
          </p>

          <Formik
            initialValues={{
              name: "",
              owner: "",
              address1: "",
              address2: "",
              phone: "",
              email: "",
              message: "",
              username: "",
            }}
            validationSchema={contactSchema}
            onSubmit={async (values, { resetForm }) => {
              try {
                const { data } = await axios.post(
                  "/.netlify/functions/send-trade-email",
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
                <Input
                  placeholder="Jane's Cabinetry"
                  label="Business Name*"
                  name="name"
                />

                <Input placeholder="Jane Doe" label="Owner" name="owner" />

                <Input
                  placeholder="123 Dream Kitchen Lane"
                  label="Address Line 1"
                  name="address1"
                />
                <Input
                  placeholder="Suite 200"
                  label="Address Line 2"
                  name="address2"
                />

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
              </Form>
            )}
          </Formik>
        </Grid>
      </Container>
    </div>
  );
};

export default ToTheTradeForm;
