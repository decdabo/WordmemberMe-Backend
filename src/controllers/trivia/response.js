import { sendEmail } from "../../utils/email/sendEmail.js";

const DAY = 3600000 * 24;

export const response = ({ body, params }, res) => {
  try {
    const { id, isLerned, email } = body;

    if (isLerned <= 3) {
      setTimeout(() => {
        sendEmail(email, id);
      }, DAY*3);
      return res.json({
        message: 'Email sended!'
      })
    }
  } catch ({ message }) {
    res.json({
      message
    });
  }  
}
