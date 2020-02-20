const express = require('express');
const app = express();

app.get('/', (req: any, res: any) => {
  res.send('Hello World!');
});
  
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});