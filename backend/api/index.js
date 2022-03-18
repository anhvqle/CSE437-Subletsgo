const express = require("express");

const router = express.Router();

// Auth API
const signupApi = require('./auth/signup');
const loginApi = require('./auth/login');

router.use(signupApi);
router.use(loginApi);

// Tenant API
const newTenantListingApi = require('./tenant/newTenantListingApi');
const getTenantListingApi = require('./tenant/getTenantListingApi');
const deleteTenantListingApi = require('./tenant/deleteTenantListingApi');

router.use(newTenantListingApi);
router.use(getTenantListingApi);
router.use(deleteTenantListingApi);

// Housing API
const newHousingApi = require("./housing/newHousingApi")
const getAllHousingApi = require("./housing/getAllHousingApi")

router.use(newHousingApi);
router.use(getAllHousingApi);

// Marketplace API
const newMarketplaceApi = require("./marketplace/newMarketplaceApi");

router.use(newMarketplaceApi);

module.exports = router;