import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) =>
  res.json({
    it_is_still_working:
      'Yep, this is a style guide test made after prettier installation',
  })
);

export default routes;
