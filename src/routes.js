const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => res.json({ it_is_still_working: true }));

export default routes;
