import { Card } from "../../models/Card.js";

export const editCard = async (req, res) => {
  try {
    const { id } = req.params;
    const { word, quotesContext, meaning } = req.body;

    const card = await Card.findOne({
      where: {
        id
      }
    });

    if (card) {
      card.word = word ? word : card.word;
      card.quotesContext = quotesContext ? quotesContext : card.quotesContext;
      card.meaning = meaning ? meaning : card.meaning;
      
      await card.save();
      return res.json({
        message: 'Card updated!',
        data: card
      });
    }

    return res.json({
      message: 'This card does not exists'
    })
  } catch ({ message }) {
    res.json({ message });
  }
}
