import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, phone, email, subject, message } = req.body;


  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  try {
    const emailRes = await transporter.sendMail({
      from: email,
      to: "diala.sh.98@gmail.com",
      subject: `contact form submission from ${name}`,
      html: `
      <p>You have a new contact form submission</p><br>
      <p><strong>Name:</strong> ${name} </p><br>
      <p><strong>Phone:</strong> ${phone} </p><br>
      <p><strong>Email:</strong> ${email} </p><br>
      <p><strong>Subject:</strong> ${subject} </p><br>
      <p><strong>Message:</strong> ${message} </p><br>`,
    });

    console.log("success!", emailRes.messageId);
  } catch (err) {
    console.log(err);
  }

  res.status(200).json(req.body);
};
