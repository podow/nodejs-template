import express from 'express';
import redis from './utils/redisClient';
import sequilize from './utils/sequilizeClient'
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', async (req: any, res: any) => {
  sequilize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err: string) => {
      console.error('Unable to connect to the database:', err);
    });
  // const {key} = req.query;

  // if (key) {
  //   await redis.setAsync('key', key);
  // }
  
  // if (redis.getAsync('key')) {
  //   const data = await redis.getAsync('key');
  //   res.send(data);
  // }

  res.send('Hello World!');
});
  
app.listen(8080, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});