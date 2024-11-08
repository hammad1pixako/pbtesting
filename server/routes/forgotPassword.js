const express = require('express');
const { forgotPasswordSendMail } = require('../controllers/forgotPassword');

const router = express.Router();



router.post('/forgotPasswordSendMail', forgotPasswordSendMail);

module.exports = router; 