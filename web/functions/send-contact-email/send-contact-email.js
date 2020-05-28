// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require("dotenv").config();

const mail = require("@sendgrid/mail");

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    };
  }

  mail.setApiKey(process.env.SENDGRID_API_KEY);

  const to = process.env.SENDGRID_TO_EMAIL;
  const from = {
    name: "Bluebird Contact Form",
    email: process.env.SENDGRID_FROM_EMAIL,
  };

  const required = ["name", "email", "message"];

  const data = JSON.parse(event.body);

  // Honeypot field
  if (data.username) {
    return {
      statusCode: 200,
      body: "Captured.",
    };
  }

  const missing = required.filter((key) => !Boolean(data[key]));

  if (missing.length) {
    const keys = missing.map(
      (key, index) => `"${key}"${index !== missing.length - 1 ? "," : ""}`
    );
    if (keys.length > 1) {
      keys.splice(keys.length - 1, 0, "and");
    }
    const message = `Missing required field${
      missing.length > 1 ? "s" : ""
    } ${keys.join(" ")}.`;

    return {
      statusCode: 422,
      body: message,
    };
  }

  const { name, email, phone, budget, interest, message } = data;

  const mailData = {
    to,
    from,
    reply_to: {
      name,
      email,
    },
    subject: `Contact form message from ${name} <${email}>`,
    text: [
      `Contact form message from ${name} <${email}>`,
      phone && `Their phone number is ${phone}`,
      interest && `Their area of interest is ${interest}`,
      budget && `They have a budget of ${budget}`,
      message,
    ]
      .filter(Boolean)
      .join("\n"),
  };

  try {
    await mail.send(mailData);

    return {
      statusCode: 200,
      body: "Message sent.",
    };
  } catch (error) {
    return {
      statusCode: error.code || 500,
      message: error.message || "Unknown error",
      body: JSON.stringify(
        (error && error.response && error.response.body) || error
      ),
    };
  }
};
