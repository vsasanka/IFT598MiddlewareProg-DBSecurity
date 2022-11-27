const express = require('express');
const loanController = require('../controllers/loanController');
const viewController = require('../controllers/viewsController');
const router = express.Router();

router
  .route('/')
  .get(loanController.getAllloans)
  .post(loanController.createLoan);
router
  .route('/allLoans')
  .get(loanController.getAllloans)
router
  .route('/:id')
  .get(loanController.getloan)
  .put(loanController.updateLoan)
  .delete(loanController.deleteLoan);

module.exports = router;
