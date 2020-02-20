const express = require('express');
const app = express();
const redisClient = require('./utils/redisClient');

const PORT = process.env.PORT || 8080;

app.get('/', async (req: any, res: any) => {
  const {key} = req.query;

  if (key) {
    await redisClient.setAsync('key', key);
  }
  
  if (redisClient.getAsync('key')) {
    const data = await redisClient.getAsync('key');
    res.send(data);
  }

  res.send('Hello World!');
});
  
app.listen(8080, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});