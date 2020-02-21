import express from 'express';

class App {
  constructor() {
    this.server = express();
    this.routes();
  }

  routes() {
    this.server.get('/', (req, res) => res.json({ working: true }));
  }
}

export default new App().server;
