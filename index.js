require('dotenv').config();
const express = require('express');
const { PORT } = require('./config/constants');
const loggerMiddleWare = require('morgan');
const corsMiddleWare = require('cors');
const testRouter = require('./routers/test');

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

app.use('/test', testRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
