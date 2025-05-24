import nodemailer from "nodemailer";

export const sendContactmail = async (toEmail, userName) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "cse.tukai@gmail.com",
      pass: "ffll jknl wpuy vdwn", // Use App Password
    },
  });

  const mailOptions = {
    from: '"Totowalal" <cse.tukai@gmail.com>',
    to: toEmail,
    subject: "Welcome to Totowalal!",
    html: `<div style="font-family: 'Roboto Mono', monospace; background-color: #FFFFFF;">
  <div style="max-width: 2000px; margin: auto; background-color: yellow; border: 2px solid #000; border-radius: 16px; padding: 20px 20px; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">

    <!-- Header -->
    <div style="text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 30px; color: #000;">
      📬 Thanks for Reaching Out!
    </div>

    <!-- Message -->
    <p style="font-size: 16px; color: #111; line-height: 1.6; text-align: center;">
      Hello ${userName},<br />
      We’ve received your message and our team is on it 🚀. Thank you for contacting Totowala!
    </p>

    <p style="font-size: 15px; color: #111; text-align: center; margin-top: 10px;">
      We typically respond within 24 hours. If it’s urgent, feel free to mention “URGENT” in the subject line and resend the query.
    </p>

    <!-- CTA Button -->
    <div style="text-align: center; margin: 35px 0;">
      <a href="https://toto-wala.onrender.com" target="_blank" style="
        background-color: #000;
        color: #FFFF00;
        padding: 14px 30px;
        text-decoration: none;
        font-weight: bold;
        font-size: 16px;
        border-radius: 8px;
        border: 2px solid #000;
        box-shadow: 0 4px #222;
        display: inline-block;
      ">
        🔁 Back to Totowala
      </a>
    </div>

    <!-- Footer -->
    <p style="font-size: 12px; color: #444; text-align: center;">
      This is an automated confirmation. For anything else, feel free to reply to this email.
    </p>

  </div>
</div>
`,
  };

  await transporter.sendMail(mailOptions);
};
