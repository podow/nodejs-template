import express, { Request, Response } from 'express';
import users from './users';

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  res.send('Hello World!');
});

router.use('/users', users);

export default router
