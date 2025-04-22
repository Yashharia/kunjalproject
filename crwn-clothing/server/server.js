const fs = require("fs");

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

console.log("Setting up Stripe...", process.env.STRIPE_SECRET_KEY);
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/create-payment-intent", async (req, res) => {
  console.log("Received payment intent request");
  try {
    const { amount } = req.body;
    console.log("Amount received:", amount);

    const customerData = await stripe.customers.create({
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    });
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      payment_method_types: ["card"],
      description: "perfumes",
      customer: customerData.id,
    });

    

    console.log("Payment intent created:", paymentIntent.id);
    res.status(200).json({ paymentIntent });
  } catch (error) {
    console.error("Stripe Error:", error);
    res.status(400).json({ error: error.message });
  }
});

app.post("/contact-form", async (req, res) => {
  try {
    console.log(req.body);
    const { name, email, message, phoneNumber } = req.body;

    // Create transporter
    let transporter = nodemailer.createTransport({
      service: "gmail", // or use smtp
      auth: {
        user: "hariakunjal5@gmail.com", // your Gmail
        pass: "yrgr dstu fahd mwwe",    // Gmail App Password (not your real password)
      },
    });

    // Email content
    let mailOptions = {
      from: `"${name}" <${email}>`,
      to: "kunjuhariacollege@gmail.com", // where you want to receive the message
      subject: "New Contact Form Submission",
      html: `
        <h3>New message from ${name}</h3>
        <p><strong>Phone:</strong> ${phoneNumber}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ success: "Message sent successfully!" });

  } catch (error) {
    console.error("Form Error:", error);
    res.status(400).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
