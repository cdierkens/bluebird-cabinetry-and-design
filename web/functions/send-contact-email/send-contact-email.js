// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
require("dotenv").config();

const mail = require("@sendgrid/mail");
mail.setApiKey(process.env.SENDGRID_API_KEY);

const required = ["name", "email", "message"];

exports.handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
      headers: { Allow: "POST" },
    };
  }

  const data = JSON.parse(event.body);
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

  const { name, email, message } = data;

  const mailData = {
    to: {
      name: "Dana Snyder",
      email: "dana@bluebirdcabinetryanddesign.com",
    },
    from: "contact@bluebirdcabinetryanddesign.com",
    reply_to: {
      name,
      email,
    },
    subject: `Contact from message from ${name} <${email}>`,
    text: message,
    mail_settings: {
      sandbox_mode: {
        enable: process.env.NODE_ENV !== "production",
      },
    },
  };

  try {
    await mail.send(mailData);

    return {
      statusCode: 200,
      body: "Message sent successfully.",
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
