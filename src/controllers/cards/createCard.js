import { Card } from "../../models/Card.js";
import { User } from "../../models/User.js";
import { sendEmail } from "../../utils/email/sendEmail.js";

const DAY = 3600000 * 24;

export const createCard = async(req, res) => {
  try {
    const { userId } = req.params;
    const { word, meaning, quotesContext } = req.body;
    if (!word) return res.json({ message: 'The key "word" is required' });

    const user = await User.findOne({
      where: {
        id: userId
      }
    });

    const card = await Card.create({
      word,
      meaning,
      quotesContext,
      userId
    });

    setTimeout(() => {
      sendEmail(user.email, card.id);      
    }, DAY*2);

    return res.json({
      message: 'Card created successfully! Soon you will get a email for a trivia 😉',
      data: card
    });
  } catch ({ message }) {
    res.json({
      message
    });
  }
}
