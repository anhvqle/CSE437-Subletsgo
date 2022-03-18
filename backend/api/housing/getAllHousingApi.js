const express = require('express');
const router = express.Router();

const Housing = require('../../models/housing')
const HousingAddress = require('../../models/housingAddress')
const HousingImage = require('../../models/housingImage')

router.get("/getAllHousingApi", async (req, res) => {
    try {
        const housings = await Housing.findAll();
        res.status(200).json(housings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;