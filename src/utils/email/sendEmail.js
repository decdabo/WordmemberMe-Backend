import { htmlEmail } from './htmlEmail.js';
import { generateToken } from './jwt.js';
import emailTransport from './nodemailerConfig.js';

export const sendEmail = async (email, id) => {
  try {
    const token = await generateToken({
      expiresIn: '24h',
      algorithm: 'H256'
    });
    const html = htmlEmail(`http://localhost:8080/api/verify/${id}/${token}`);
    await emailTransport(email, html);
    
  } catch (error) {
    console.log(error);
  }
}
