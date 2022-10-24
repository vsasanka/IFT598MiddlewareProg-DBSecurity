const express = require('express');
const loanController = require('../controllers/loanController');
const router = express.Router();

// router for CRUD operations on loans table
router
  .route('/')
  .get(loanController.getAllloans)
  .post(loanController.createLoan);

router
  .route('/:id')
  .get(loanController.getLoan)
  .patch(loanController.updateLoan)
  .put(loanController.updateLoan)
  .delete(loanController.deleteLoan);

module.exports = router;
