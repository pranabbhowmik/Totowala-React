import nodemailer from "nodemailer";

export const sendWelcomeEmail = async (toEmail, userName) => {
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
    html: `<div style="font-family: 'Roboto Mono', monospace; background-color: #FFFFFF; padding: 40px;">
  <div style="max-width: 600px; margin: auto; background-color: #FFFF00; border: 2px solid #000; border-radius: 16px; padding: 40px 30px; box-shadow: 0 8px 20px rgba(0,0,0,0.2);">

    <!-- Header with Emoji -->
    <div style="text-align: center; font-size: 24px; font-weight: bold; margin-bottom: 30px; color: #000;">
      🚕 Welcome to Totowala, ${userName}!
    </div>

    <!-- Message -->
    <p style="font-size: 16px; color: #111; line-height: 1.6; text-align: center;">
      Your account has been successfully created🎉🎉🎊.<br />
      We’re thrilled to have you with us in the Totowala family. Now you can book e-rickshaws with just a few taps.
    </p>

    <p style="font-size: 15px; color: #111; text-align: center; margin-top: 10px;">
      Ready to get started? Just click below.
    </p>

    <!-- 3D Button -->
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
        🚀 Book Your Ride
      </a>
    </div>

    <!-- Footer -->
    <p style="font-size: 12px; color: #444; text-align: center;">
      Didn’t sign up for Totowala? You can safely ignore this email.
    </p>

  </div>
</div>
`,
  };

  await transporter.sendMail(mailOptions);
};
