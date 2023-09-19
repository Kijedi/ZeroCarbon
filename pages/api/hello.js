// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";

export default function handler(req, res) {
  const transporter = nodemailer.createTransport({
    host: "mail.violettechies.co.ke",
    port: 465,
    secure: true, // upgrade later with STARTTLS
    auth: {
      user: "hello@violettechies.co.ke",
      pass: "Wesleigh#1?",
    },
  });

  // Set up email data
  let options = {
    from: "hello@violettechies.co.ke", // replace with your email address
    to: "wkijedi@gmail.com", // replace with the recipient's email address
    subject: "Test Email from Node.js",
    text: "Hello world!", // plain text body
    html: "<p>Hello world!</p>", // HTML body
  };

  const sendMail = async () => {
    await transporter.sendMail(options);
  };
  sendMail();

  res.status(200).json({ events: [] });
}
