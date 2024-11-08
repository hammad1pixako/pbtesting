const express = require('express');
const router = express.Router();

const { saveCustomerData } = require('../controllers/customer');
router.post('/saveCustomerData', saveCustomerData);

module.exports = router;