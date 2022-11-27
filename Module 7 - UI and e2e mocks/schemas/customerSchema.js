//import mongoose from 'mongoose';
const mongoose = require('mongoose');

const customer = new mongoose.Schema({
  fname:  String,
  lname: String,
  email:String,
  password: String,
  cpassword:String,
  createdDate:{type:Date,default:Date.now},
  insertedDate:{type:Date,default:Date.now},
  isDeleted:{type:Date,default:Date.now}
}
);

const Loan = mongoose.model('customerCollection', customer);
module.exports = Loan;
