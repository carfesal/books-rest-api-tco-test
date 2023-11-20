import express from 'express';
import booksRouter from './routes/books.js';
import authorsRouter from './routes/authors.js';
import usersRouter from './routes/users.js';
import loansRouter from './routes/loans.js';
import { errorHandler } from './middlewares/error_handling.js';
import { logger } from './logging/logger.js';
import morgan from 'morgan';
import fs from 'fs';

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

app. get('/test', (req, res) => {
  //res.send('Hello World!');  
  res.json(readJSONFile('/app/src/payments.json'));
});

function readJSONFile(filename) {
  try {
    // Note that jsonString will be a <Buffer> since we did not specify an
    // encoding type for the file. But it'll still work because JSON.parse() will
    // use <Buffer>.toString().
    const jsonString = fs.readFileSync(filename);
    const payments = JSON.parse(jsonString);
    return payments;
  } catch (err) {
    return {error: err};
  }
  
}

export default app;
