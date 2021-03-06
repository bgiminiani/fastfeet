import jwt from 'jsonwebtoken';
import * as yup from 'yup';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails.' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    // Not Authorized
    if (!user) {
      return res.status(401).json({ error: 'User not found.' });
    }

    // Check user password
    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ error: 'Password does not match.' });
    }

    // Generate token with id payload
    const { id, name } = user;
    const token = jwt.sign({ id }, authConfig.secretKey, {
      expiresIn: authConfig.expiresIn,
    });

    return res.json({
      user: {
        id,
        name,
        email,
      },
      token,
    });
  }
}

export default new SessionController();
