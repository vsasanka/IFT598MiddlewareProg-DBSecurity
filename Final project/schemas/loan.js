//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  userID: mongoose.ObjectId,
  loanType:  String,//Name of the Customer
  loanNumber: Number,//ContactNumber of the Customer
  amount:   Number,// The customer's address
  interestRate: Number,//Principal Amount
  loanTerm: Number,//Defines the interst percent loan disbursed to a customer
  startDate:Date,
  createdDate:{type:Date,default:Date.now},//inserts current date (System's Default date) to createdDate when a document is created
  insertedDate:{type:Date,default:Date.now},
  isDeleted:{type:Date,default:Date.now}//inserts current date (System's Default date) to insertedDate when a document is created
  }
);

const Loan = mongoose.model('loanColletion', loanSchema);
module.exports = Loan;
