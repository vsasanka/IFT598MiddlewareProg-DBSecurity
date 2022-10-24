// Schema for loan
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  loanType: String,
  loanNumber: Number,
  amount:   Number,
  interestRate: Number,
  loanTermYears: Number,
  startDate: Date,
  createdDate: { type: Date, default: Date.now }, // puts the default date as today's (now's) date for createdDate field when a Document is created
  modifiedDate: { type: Date, default: Date.now }, // puts the default date as today's (now's) date for insertedDate field when a Document is created
  isDeletedDate: { type: Date, default: Date.now }
});

const Loan = mongoose.model('LoanTable', loanSchema);

module.exports = Loan;