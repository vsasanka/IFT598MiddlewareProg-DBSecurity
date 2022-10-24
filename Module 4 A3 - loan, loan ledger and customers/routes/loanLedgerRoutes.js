const express = require('express');
const loanLedgerController = require('../controllers/loanLedgerController');
const router = express.Router();

// router for CRUD operations on loanLedger table
router
  .route('/')
  .get(loanLedgerController.getAllloans)
  .post(loanLedgerController.createLoan);

router
  .route('/:id')
  .get(loanLedgerController.getLoan)
  .patch(loanLedgerController.updateLoan)
  .put(loanLedgerController.updateLoan)
  .delete(loanLedgerController.deleteLoan);

module.exports = router;
