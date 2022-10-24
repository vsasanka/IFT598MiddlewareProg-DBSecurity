const express = require('express');
const customerController = require('../controllers/customerController');
const router = express.Router();

// router for CRUD operations on customer table
router
  .route('/')
  .get(customerController.getAllloans)
  .post(customerController.createLoan);

router
  .route('/:id')
  .get(customerController.getLoan)
  .patch(customerController.updateLoan)
  .put(customerController.updateLoan)
  .delete(customerController.deleteLoan);

module.exports = router;
