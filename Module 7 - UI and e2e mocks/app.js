// 3) ROUTES
const express = require('express');
const morgan = require('morgan');
const path = require('path');
const loanRouter = require('./routes/loanRoutes');
const customerRouter = require('./routes/customerRouter');
const loanLedgerRouter = require('./routes/loansLedgerRoute');
const userRouter = require('./routes/userRoutes');
const viewRouter = require('./routes/viewRoutes.js');
const app = express();

//PUG
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));
// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
// 1) MIDDLEWARES
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.static(`${__dirname}/public`));
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
  console.log('Hello from the middleware 👋');
  next();
});
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});
// 3) ROUTES
app.use('/loan', loanRouter);
app.use('/customer', customerRouter);
app.use('/loanLedger', loanLedgerRouter);
app.use('/', viewRouter);
app.use('/users', userRouter);

module.exports = app;