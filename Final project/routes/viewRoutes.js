const express = require('express');
const viewsController = require('../controllers/viewsController');

const router = express.Router();

router.get('/', viewsController.getLandingPAge);
router.get('/Course', viewsController.getCourse);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignInForm);
router.get('/a', viewsController.getSignInForm);
router.get('/newLoan', viewsController.getNewLoanPage);



module.exports = router;
