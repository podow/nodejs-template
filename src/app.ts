import express from 'express';
const app = express();

const PORT = process.env.PORT || 8080;

app.use('/favicon.ico', express.static('./static/favicon.ico'));

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
