const path = require('path');
const express = require('express');
const morgan = require('morgan');
const pug = require('pug');

const courseRouter = require('./routes/courseRoutes');
const loanRouter = require('./routes/loanRoutes');
const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

// 3) ROUTES
app.use('/api/v1/courses', courseRouter);
app.use('/api/v1/loans', loanRouter);
app.use('/api/v1/users', userRouter);
app.use('/', viewRouter);

module.exports = app;