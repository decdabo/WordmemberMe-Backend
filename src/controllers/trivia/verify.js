import { Card } from "../../models/Card.js";
import { checkToken } from "../../utils/jwt.js"

export const verifyToken = async({ params }, res) => {
  try {
    const { token } = params;
    const { id } = await checkToken(token);

    const cards = await Card.findAll();
    const multipleChoice = cards.filter(card => card.id === id);

    for (let i=0; i < 3; i++ ) {
      const randomNum = Math.floor(Math.random()*(cards.length));
      if (!multipleChoice.includes(cards[randomNum])) {
        multipleChoice.push(cards[randomNum]);
      } else {
        i--
      }
    }

    const shuffledArr = multipleChoice.map(value =>({ 
      value, sort: Math.random()
    })).sort((a, b) => a.sort - b.sort).map(({ value }) => value)
    return res.json({
      message: '',
      data: shuffledArr
    })
  } catch ({ message }) {
    res.json({
      message
    })
  }
}
