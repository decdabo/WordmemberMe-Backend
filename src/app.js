import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import * as dotenv from 'dotenv';

import authRouter from './routes/auth.routes.js';
import cardsRouter from './routes/cards.routes.js'
import { serverError, notFoundError } from './error/errors.js';
// import sequelize from './database.js';

const app = express();

dotenv.config();
app.use([
  cors(),
  morgan('dev'),
  express.json({ limit: '50mb' }),
  express.urlencoded({ extended: false }),
]);

app.set('port', process.env.PORT || 8080);
app.use(authRouter);
app.use(cardsRouter);
app.use(notFoundError);
app.use(serverError);

// const start = async() => {
//   await sequelize.sync({force: false});
// }
// start();

export default app;
