import express from 'express';
const app = express();

const PORT = process.env.PORT || 8080;

app.use('/favicon.ico', express.static('./static/favicon.ico'));

app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});

/**
 * Catch 404 and forward to error handler
 */
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = new HttpRequestError(404, '404 - Not Found');
  next(err);
});

/**
 * Error handler
 * Define as the last app.use callback
 */
app.use((err: HttpRequestError, req: Request, res: Response) => {
  res
    .status(err.status || 500)
    .send({
      err: err.message
    });
});

app.listen(PORT, () => {
  console.log(`App listening on http://localhost:${PORT}`);
});
