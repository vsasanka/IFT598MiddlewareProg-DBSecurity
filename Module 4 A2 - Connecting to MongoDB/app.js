const express = require('express');
const morgan = require('morgan');

const courseRouter = require('./routes/courseRoutes');
const loanRouter = require('./routes/loanRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());


app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/loans', loanRouter);
app.use('/api/v1/users', userRouter);

module.exports = app;