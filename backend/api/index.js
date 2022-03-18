const express = require("express");
const signupApi = require('./auth/signup');
const loginApi = require('./auth/login');

const newTenantListingApi = require('./tenant/newTenantListingApi');
const getTenantListingApi = require('./tenant/getTenantListingApi');
const deleteTenantListingApi = require('./tenant/deleteTenantListingApi');

const newHousingApi = require("./housing/newHousingApi")
const getAllHousingApi = require("./housing/getAllHousingApi")

const router = express.Router();

router.use(signupApi);
router.use(loginApi);

router.use(newTenantListingApi);
router.use(getTenantListingApi);
router.use(deleteTenantListingApi);

router.use(newHousingApi);
router.use(getAllHousingApi);

module.exports = router;