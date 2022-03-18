const express = require('express');
const Tenant = require('../../models/tenant');
const User = require("../../models/user");

const router = express.Router();

router.post("/newTenantListingApi", async (req, res) => {
    const { fullName, phoneNumber, email, gender, campus, classStanding, description, userId } = req.body;
    const newTenant = new Tenant({ fullName, phoneNumber, email, gender, campus, classStanding, description, userId });

    const savedTenant = await newTenant.save()
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });

    if (savedTenant) {
        res.status(200).json({ message: "Thanks for creating a new tenant listing!" });
    }
});


module.exports = router;