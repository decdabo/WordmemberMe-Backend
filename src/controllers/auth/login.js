import { compareSync } from "bcrypt";
import { User } from "../../models/User.js";

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({
      where: {
        email
      }
    })
    if (user === null) return res.json({message: 'This account not exists bro'});
    if(!compareSync(password, user.password)) return res.json({message: 'Email or password wrong'});

    res.json({
      message: 'Successfully logged!',
      data: {
        ...user.dataValues,
        password: undefined
      }
    });
  } catch ({ message }) {
    res.json({
      message
    })
  }
}

export default login;
