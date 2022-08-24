import { hash } from "bcrypt";
import { User } from "../../models/User.js";

const register = async(req, res) => {
  const { email, name, password } = req.body;
  try {
    const emailExist = await User.findOne({
      where: { email }
    })
    if (emailExist) return res.json({ message: 'This email is already in use' });

    const hashedPassword = await hash(password, 12);
    const user = await User.create({
      email,
      name,
      password: hashedPassword
    })

    res.json({
      message: 'User created!',
      data: {
        ...user.dataValues,
        password: undefined,
      }
    })
  } catch ({ message }) {
    res.json({
      message
    })
  }
}

export default register;
