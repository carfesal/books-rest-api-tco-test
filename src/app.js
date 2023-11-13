import express from 'express';
import booksRouter from './routes/books.js';
import authorsRouter from './routes/authors.js';
import usersRouter from './routes/users.js';
import loansRouter from './routes/loans.js';
import { errorHandler } from './middlewares/error_handling.js';
import { logger } from './logging/logger.js';
import morgan from 'morgan';

const app = express();

//CONFIGURING MORGAN
const morganMiddleware = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
      stream: {
        // Configure Morgan to use our custom logger with the http severity
        write: (message) => logger.http(message.trim()),
      },
    }
  );

app.use(morganMiddleware);
app.use(express.json());
app.use(errorHandler);

app.use(booksRouter);
app.use(authorsRouter);
app.use(usersRouter);
app.use(loansRouter);

export default app;
