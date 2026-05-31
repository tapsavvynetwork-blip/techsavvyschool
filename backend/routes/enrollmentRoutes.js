const express = require('express');
const router = express.Router();
const { createEnrollment, getEnrollments, updateEnrollmentStatus } = require('../controllers/enrollmentController');

router.route('/').post(createEnrollment).get(getEnrollments);
router.route('/:id/status').patch(updateEnrollmentStatus);

module.exports = router;
