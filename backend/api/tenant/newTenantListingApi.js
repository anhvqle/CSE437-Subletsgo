const express = require('express');
const Tenant = require('../../models/tenant')
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/newTenantListingApi", async (req, res) => {
    const { fullName, phoneNumber, email, gender, campus, classStanding, description } = req.body;

    const newTenant = new Tenant({ fullName, phoneNumber, email, gender, campus, classStanding, description });

    const savedTenant = await newTenant.save().catch((err) => {
        res.status(500).json({ message: "Cannot create a new tenant listing!" });
    });
    
    if (savedTenant) {
        res.status(200).json({ message: "Thanks for creating a new tenant listing!" });
    }
});
  

module.exports = router;