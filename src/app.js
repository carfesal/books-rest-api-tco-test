import express from 'express';
import booksRouter from './routes/books.js';
import authorsRouter from './routes/authors.js';
import usersRouter from './routes/users.js';
import loansRouter from './routes/loans.js';

const app = express();


app.use(express.json());

app.use(booksRouter);
app.use(authorsRouter);
app.use(usersRouter);
app.use(loansRouter);

export default app;
