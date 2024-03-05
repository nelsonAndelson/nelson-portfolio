const express = require("express");
const app = express();

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTestAccount({
  service: "gmail",
  auth: {
    user: "nelsonbaguma15@gmail.com",
    pass: "Cleveland,OH",
  },
});

const PORT = process.env.PORT || 5500;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  const mailOptions = {
    from: "nelsonbaguma15@gmail.com",
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send("Email could not be sent!");
    } else {
      console.log("Email sent: " + info.response);
      res.send("Email sent successfully.");
    }
  });
});

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
