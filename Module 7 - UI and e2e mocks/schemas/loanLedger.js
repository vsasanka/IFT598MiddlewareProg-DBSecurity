//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const loanLedger= new mongoose.Schema({
  paymentamount:  Number,//Name of the Customer
  interest: Number,//ContactNumber of the Customer
  principal:   Number,// The customer's address
  createdDate:{type:Date,default:Date.now},//inserts current date (System's Default date) to createdDate when a document is created
  modifidateDate:{type:Date,default:Date.now},
  isDeleted:{type:Date,default:Date.now}
  //inserts current date (System's Default date) to insertedDate when a document is created
  }
);

const Loan = mongoose.model('loanLedgerCollection', loanLedger);
module.exports = Loan;
