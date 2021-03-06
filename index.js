require('dotenv').config();
const express = require('express');
const { PORT } = require('./config/constants');
const loggerMiddleWare = require('morgan');
const corsMiddleWare = require('cors');
const authRouter = require('./routers/auth');
const testRouter = require('./routers/test');
const userRouter = require('./routers/user');

const app = express();

app.use(loggerMiddleWare('dev'));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleWare());

if (process.env.DELAY) {
  app.use((req, res, next) => {
    setTimeout(() => next(), parseInt(process.env.DELAY));
  });
}

app.use('/', authRouter);
app.use('/test', testRouter);
app.use('/users', userRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
