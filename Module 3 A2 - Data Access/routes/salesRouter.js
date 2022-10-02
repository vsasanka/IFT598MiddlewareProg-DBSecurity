const express = require('express');
const router = express.Router();
const salesController = require('../controllers/salesController');

router
    .route('/')
    .get(salesController.getAllSales)
    .post(salesController.createNewSales)
    .delete(salesController.deleteSales);

router
    .route('/:id')
    .get(salesController.getSalesByID)
    .patch(salesController.patchSalesById)
    .put(salesController.patchSalesById)
    .delete(salesController.deleteSalesByID);

module.exports = router;