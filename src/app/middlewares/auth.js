import jwt from 'jsonwebtoken';
import { promisify } from 'util';
import auth from '../../config/auth';

export default async (req, res, next) => {
  // Get token
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: 'Token not provide.' });
  }

  const [, token] = authorization.split(' ');

  // Validate token and save it in request
  try {
    const decoded = await promisify(jwt.verify)(token, auth.secretKey);
    req.userId = decoded.id;
    return next();
  } catch (error) {
    res.status(401).json({ error: 'Invalid token.' });
  }
};
