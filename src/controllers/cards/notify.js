import { sendEmail } from "../../utils/sendEmail";

export const notify = ({ body, params }, res) => {
  try {
    const { id, isLerned, email } = body;

    if (isLerned <= 3) {
      setTimeout(() => {
        sendEmail(email, id);
      }, 5000);
      return res.json({
        message: ''
      })
    }
  } catch ({ message }) {
    res.json({
      message
    });
  }  
}