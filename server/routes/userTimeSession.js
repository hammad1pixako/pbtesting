const express = require('express');

const router = express.Router();

const { storeUserTimeSession, getTotalTime } = require('../controllers/userTimeSession')

router.post('/submitSession', storeUserTimeSession);
router.post('/getTotalTime', getTotalTime);

module.exports = router; 