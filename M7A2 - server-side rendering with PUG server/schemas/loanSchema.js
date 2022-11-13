// import mongoose from 'mongoose';
// const { Schema } = mongoose;

// const loanSchema = new Schema({
const mongoose = require('mongoose');

const loanSchema = new mongoose.Schema({
  customerName:  String, // String is shorthand for {type: String}
  phoneNumber: String,
  address:   String,
  loanAmount: Number,
  interest: Number,
  loanTermYears: Number,
  loanType: String, // defines the type of loan borrowed by the customer
  createdDate: { type: Date, default: Date.now }, // puts the default date as today's (now's) date for createdDate field when a Document is created
  insertedDate: { type: Date, default: Date.now }, // puts the default date as today's (now's) date for insertedDate field when a Document is created
  description: String // String field that describes the collection
});

const Loan = mongoose.model('Loan', loanSchema);

module.exports = Loan;