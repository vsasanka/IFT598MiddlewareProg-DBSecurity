const express = require('express');
const loanController = require('../controllers/loanController');
const viewController = require('../controllers/viewsController');
const authHandlers = require('../controllers/authController');
const router = express.Router();



router
  .route('/')
  .get(loanController.getAllloans)
  .post(authHandlers.protect, loanController.createLoan);
router
  .route('/allLoans')
  .get(authHandlers.protect, loanController.getLoanByUserID);
router
  .route('/:id')
  .get(loanController.getloan)
  .put(loanController.updateLoan)
  .delete(loanController.deleteLoan);

module.exports = router;
