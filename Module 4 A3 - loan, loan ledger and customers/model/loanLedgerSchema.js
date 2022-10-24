// Schema for loan ledger
const mongoose = require('mongoose');

const loanLedgerSchema = new mongoose.Schema({
  paymentAmount:  Number,
  interest: Number,
  principal: Number,
  createdDate: { type: Date, default: Date.now }, // puts the default date as today's (now's) date for createdDate field when a Document is created
  modifiedDate: { type: Date, default: Date.now }, // puts the default date as today's (now's) date for insertedDate field when a Document is created
  isDeletedDate: { type: Date, default: Date.now }
});

const LoanLedger = mongoose.model('loanLedgerTable', loanLedgerSchema);

module.exports = LoanLedger;