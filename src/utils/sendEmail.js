import * as dotenv from 'dotenv';

import { htmlEmail } from './htmlEmail';
import { generateToken } from './jwt';

dotenv.config();

export const sendEmail = async (email, id) => {
  try {
    const token = await generateToken({
      expiresIn: '24h',
      algorithm: 'H256'
    });
    const html = htmlEmail(`http://localhost:8080/api/verify/${id}/${token}`);

    const transport = nodemailer.createTransport({
      host: MAIL_HOST,
      port: 2525,
      // secure: true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    await transport.sendMail({
      from: EMAIL_SENDER,
      email,
      subject: 'Is time to test your knowledge of the word',
      html,
    });
  } catch (error) {
    console.log(error);
  }
}
