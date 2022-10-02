const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router
    .route('/')
    .get(customerController.getAllCustomers)
    .post(customerController.createNewCustomers)
    .delete(customerController.deleteCustomers);

router
    .route('/:id')
    .get(customerController.getCustomersByID)
    .patch(customerController.patchCustomersById)
    .put(customerController.patchCustomersById)
    .delete(customerController.deleteCustomersByID);

module.exports = router;