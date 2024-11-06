const express = require('express');

const router = express.Router();

const { register, login, validUser } = require('../controllers/auth');
const { authorizedUser } = require('../helpers/auth');

router.post('/register', register);
router.post('/login', login)
router.get("/authorizedUser", authorizedUser, validUser)

module.exports = router; 