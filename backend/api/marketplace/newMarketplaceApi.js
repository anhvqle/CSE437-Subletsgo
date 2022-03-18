const express = require('express');
const Marketplace = require('../../models/marketplace');
const User = require("../../models/user");

const router = express.Router();

router.post("/newMarketplaceApi", async (req, res) => {
    const newMarketplace = new Marketplace(req.body);

    const savedMarketplace = await newMarketplace.save()
        .catch((err) => {
            res.status(500).json({ message: err.message });
        });

    if (savedMarketplace) {
        res.status(200).json({ message: "Thanks for creating a new marketplace item!" });
    }
});

module.exports = router;