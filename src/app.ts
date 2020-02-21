import express from 'express';
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', async (req: any, res: any) => {
  res.send('Hello World!');
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
