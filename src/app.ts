const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});
  
app.listen(8080, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});