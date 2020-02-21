import express from 'express';

const app = express();

app.get('/', (req, res) => res.json({ is_it_working: true }));

app.listen(3333);


