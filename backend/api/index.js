const express = require("express");

const router = express.Router();

// Auth API
const signupApi = require('./auth/signup');
const validateSignupApi = require('./auth/validateSignup');
const loginApi = require('./auth/login');
const forgetPasswordApi = require('./auth/forgetPassword');
const resetPasswordApi = require('./auth/resetPassword');

router.use(signupApi);
router.use(validateSignupApi);
router.use(loginApi);
router.use(forgetPasswordApi);
router.use(resetPasswordApi);

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
const getDetailHousingApi = require("./housing/getDetailHousingApi");
const deleteHousingApi = require("./housing/deleteHousingApi")

router.use(newHousingApi);
router.use(getAllHousingApi);
router.use(getDetailHousingApi);
router.use(deleteHousingApi);

// Marketplace API
const newMarketplaceApi = require("./marketplace/newMarketplaceApi");
const getAllMarketplaceApi = require("./marketplace/getAllMarketplaceApi");
const getMarketplaceDetailApi = require("./marketplace/getMarketplaceDetailApi");
const deleteMarketplaceApi = require("./marketplace/deleteMarketplaceApi");

router.use(newMarketplaceApi);
router.use(getAllMarketplaceApi);
router.use(getMarketplaceDetailApi);
router.use(deleteMarketplaceApi);

// Profile API
const getUserTenantListingApi = require("./profile/getUserTenantListingApi");
const getUserHousingListingApi = require("./profile/getUserHousingListingApi");
const getUserMarketplaceListingApi = require("./profile/getUserMarketplaceListingApi");

router.use(getUserTenantListingApi);
router.use(getUserHousingListingApi);
router.use(getUserMarketplaceListingApi);

module.exports = router;