import { Card } from "../../models/Card.js";
import { sendEmail } from "../../utils/email/sendEmail.js";
import { checkToken } from "../../utils/jwt.js";

const DAY = 3600000 * 24;

export const response = async ({ body, params }, res) => {
  try {
    const { isLerned } = body;
    const { token } = params;
    const { id, email } = await checkToken(token);
    if (!id) return res.json({ message: "jwt expired" });
    
    const card = await Card.findOne({
      where:{
        id
      }
    });
    card.isLerned = isLerned;
    await card.save();

    if (isLerned > 3) return res.json({message: 'Congrats!!! Word learned!'});

    setTimeout(() => {
      sendEmail(email, id);
    }, DAY*2);

    return res.json({
      message: 'Data saved'
    });
  } catch ({ message }) {
    res.json({
      message
    });
  }  
}
