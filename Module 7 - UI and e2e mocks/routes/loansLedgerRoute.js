const express = require('express');
const loansLedgerController = require('../controllers/loansLedgerController');
const router = express.Router();

router
  .route('/')
  .get(loansLedgerController.getAllloansLedgers)
  .post(loansLedgerController.createloansLedger);

router
  .route('/:id')
  .get(loansLedgerController.getloansLedger)
  .put(loansLedgerController.updateloansLedger)
  .delete(loansLedgerController.deleteloansLedger);

module.exports = router;
