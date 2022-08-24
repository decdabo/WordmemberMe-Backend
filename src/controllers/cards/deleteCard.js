import { Card } from "../../models/Card.js";

export const deleteCard = async(req, res) => {
  const { id } = req.params;
  try {
    const result = await Card.destroy({
      where: {
        id
      }
    });

    res.json({
      message: 'Card deleted successfully!',
      data: result
    });
  } catch ({ message }) {
    res.json(message);
  }
}

