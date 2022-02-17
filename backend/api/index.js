const express = require("express");
const signupApi = require('./signup');
const loginApi = require('./login')

const router = express.Router();

router.use(signupApi);
router.use(loginApi);

module.exports = router;