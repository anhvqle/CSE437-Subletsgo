const express = require('express');
const Tenant = require('../../models/tenant')
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/getTenantListing", async (req, res) => {
    const tenants = await Tenant.findAll();

    if (tenants) {
        res.status(200).json({ tenants })
    }
    else {
        return res.status(400)
    }

});

module.exports = router;