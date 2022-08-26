import { htmlEmail } from './htmlEmail.js';
import { generateToken } from '../jwt.js';
import emailTransport from './nodemailerConfig.js';


export const sendEmail = async (email, id) => {
  try {
    const token = await generateToken({ id, email },{
      expiresIn: '24h',
      algorithm: 'HS256'
    });

    const html = htmlEmail(`http://localhost:8080/api/verify/${token}/${id}`);
    await emailTransport(email, html);

  } catch (error) {
    console.log(error);
  }
}
