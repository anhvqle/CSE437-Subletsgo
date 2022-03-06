const express = require("express");
const signupApi = require('./auth/signup');
const loginApi = require('./auth/login');

const newTenantListingApi = require('./tenant/newTenantListingApi');

const router = express.Router();

router.use(signupApi);
router.use(loginApi);

router.use(newTenantListingApi);

module.exports = router;