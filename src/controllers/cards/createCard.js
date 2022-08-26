import { Card } from "../../models/Card.js";

export const createCard = async(req, res) => {
  try {
    const { userId } = req.params;
    const { word, meaning, quotesContext, email } = req.body;
    if (word) {
      const card = await Card.create({
        word,
        meaning,
        quotesContext,
        userId
      });
      
      return res.json({
        message: 'Card created successfully!',
        data: card
      });
    }

    return res.json({
      message: 'The key "word" is required'
    });
  } catch ({ message }) {
    res.json({
      message
    });
  }
}
