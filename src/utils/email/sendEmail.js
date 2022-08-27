import * as dotenv from 'dotenv';

import { htmlEmail } from './htmlEmail.js';
import { generateToken } from '../jwt.js';
import emailTransport from './config.js';
dotenv.config();

export const sendEmail = async (email, id) => {
  try {
    const token = await generateToken({ id, email },{
      expiresIn: '24h',
      algorithm: 'HS256'
    });
    const html = htmlEmail(`${process.env.FRONTEND_URL}/${token}/${id}/${email}`);

    return await emailTransport(email, html);
  } catch (error) {
    console.log(error);
  }
}
