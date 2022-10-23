const express = require('express');
const courseController = require('../controllers/courseController');
const router = express.Router();

router
  .route('/')
  .get(courseController.getAllcourses)
  .post(courseController.createCourse);

router
  .route('/:id')
  .get(courseController.getcourse)
  .patch(courseController.updateCourse)
  .delete(courseController.deletCourse);

module.exports = router;
