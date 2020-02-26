import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({
    it_is_still_working:
      'Yep, this is a style guide test made after prettier installation',
  })
);

routes.post('/users', async (req, res) => {
  const user = await User.create(req.body);
  return res.json({ user_created: user });
});

export default routes;
