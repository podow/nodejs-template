import express, { Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import cors from 'cors';

import HttpRequestError from './exceptions/HttpRequestError';
import routes from './routes'

const PORT = process.env.PORT || 8080;

const app = express();

/**
 * Middlewares
 */
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({ secret: 'nodejs', cookie: { maxAge: 60000 }, resave: false, saveUninitialized: false }));

app.use('/favicon.ico', express.static('./static/favicon.ico'));

app.use(routes);

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
