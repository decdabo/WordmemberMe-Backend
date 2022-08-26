
export const notify = ({ body, params }, res) => {
  try {
    const { id, isLerned, email } = body;

    if (isLerned <= 3) {
      setTimeout(() => {
        sendEmail(email, id);
      }, 20000);
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