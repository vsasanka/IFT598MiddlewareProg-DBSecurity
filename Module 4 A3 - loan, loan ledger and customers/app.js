const express = require('express');
const morgan = require('morgan');

// imported routes for loan ledger, loan, and customer tables respectively
const loanLedgerRouter = require('./routes/loanLedgerRoutes');
const loanRouter = require('./routes/loanRoutes');
const customerRouter = require('./routes/customerRoutes');

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

// API for CRUD operations on customers table
app.use('/api/v1/customers', customerRouter);
// API for CRUD operations on loans table
app.use('/api/v1/loans', loanRouter);
// API for CRUD operations on loanLedger table
app.use('/api/v1/loanLedgers', loanLedgerRouter);

module.exports = app;