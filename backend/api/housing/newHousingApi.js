const express = require('express');
const router = express.Router();

const Housing = require('../../models/housing')
const HousingAddress = require('../../models/housingAddress')

router.post("/newHousingApi", async (req, res) => {
    // console.log(req.body.images[0]);
    let { images } = req.body;
    delete req.body.images;
    let { address } = req.body
    delete req.body.address;
    console.log(req.body);
    const newHousing = new Housing(req.body);
    console.log(newHousing);
    const savedHousing = await newHousing.save().catch((err) => {
        res.status(500).json({ message: err.message });
    });
    if (address) {
        const newHousingAddress = new HousingAddress({ ...address.value, label: address.label, housingId: savedHousing.id })
        await newHousingAddress.save().catch((err) => {
            res.status(500).json({ message: err.message });
        });
    }

    if (!res.headersSent && savedHousing) {
        res.status(200).json({ message: "Successfully save housing to db" });
    }
});


module.exports = router;