const express = require('express');
const { markAttendance } = require('../controllers/checkinController');
const authenticate = require('../middleware/authenticate');


const router = express.Router();

router.post('/checkin', authenticate , markAttendance);

module.exports = router;
