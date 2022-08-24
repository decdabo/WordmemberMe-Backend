import { Card } from "../../models/Card.js";

export const getCards = async(req, res) => {
  const { userId } = req.params;
  const { word } = req.body;
  try {
    if (word) {
      const cards = await Card.findAll({
        where: {
          userId,
          word
        }
      }); 
  
      return res.json({
        message: 'Result: ',
        data: cards
      });
    }

    const cards = await Card.findAll({
      where: {
        userId,
      }
    }); 

    return res.json({
      message: 'Result: ',
      data: cards
    });
  } catch ({ message }) {
    res.json({
      message
    });
  }
}
