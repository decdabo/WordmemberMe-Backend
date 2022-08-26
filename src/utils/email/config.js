import nodemailer from 'nodemailer';
import * as dotenv from 'dotenv';

dotenv.config();
const { MAIL_HOST, MAIL_SENDER, MAIL_PASS } = process.env;

const transport = nodemailer.createTransport({
  service: 'gmail',
  host: MAIL_HOST,
  secure: false,
  auth: {
    user: MAIL_SENDER,
    pass: MAIL_PASS,
  },
});

const emailTransport = async(email, html) => {
  try {
    await transport.sendMail({
      from: MAIL_SENDER,
      to: email,
      subject: 'Is time to test your knowledge of the word',
      html,
    });
  } catch (error) {
    console.log(error);
  }
}

export default emailTransport;
