import { sendEmail } from "../../utils/email/sendEmail.js";

export const renewToken = ({ body }, res) => {
  try {
    const { id, email } = body;
    sendEmail(email, id);

    return res.json({
      message: 'Trivia`s link sended to your mail!'
    });
  } catch ({ message }) {
    res.json({
      message
    })
  }
}
