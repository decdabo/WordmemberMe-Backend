import { User } from "../../models/User.js";

const editUser = async(req, res) => {
  const { id } = req.params;
  const { name, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        id
      }
    });

    if (password < 3) return res.json({ message: 'Password too short' });

    if (user) {
      user.name = name ? name : user.name;
      user.password = password ? password : user.password;
      
      await user.save();
      const { dataValues } = user;

      return res.json({
        message: 'Account updated!',
        data: {
          ...dataValues,
          password: undefined
        }
      })
    }

    return res.json({
      message: 'That user does not exists'
    })
  } catch ({ message }) {
    res.json({ message })
  }
}

export default editUser;
