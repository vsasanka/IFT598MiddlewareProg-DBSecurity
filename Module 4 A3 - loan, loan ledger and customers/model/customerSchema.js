// Schema for customer
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name:  String, // String is shorthand for {type: String}
  firstName:  String,
  middleName:  String,
  lastName:  String,
  dateOfBirth: Date,
  address:   String,
  Gender: String,
  createdDate: { type: Date, default: Date.now }, // puts the default date as today's (now's) date for createdDate field when a Document is created
  modifiedDate: { type: Date, default: Date.now }, // puts the default date as today's (now's) date for insertedDate field when a Document is created
  isDeletedDate: { type: Date, default: Date.now }
});

const Customer = mongoose.model('customerTable', customerSchema);

module.exports = Customer;