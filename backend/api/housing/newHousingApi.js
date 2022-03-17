const express = require('express');
const router = express.Router();

const Housing = require('../../models/housing')
const HousingAddress = require('../../models/housingAddress')
const imageUpload = require("../../services/imagesService")

router.post("/newHousingApi", async (req, res) => {
    // console.log(req.body.images[0]);
    let { images } = req.body;
    delete req.body.images;
    let { address } = req.body
    delete req.body.address;
    const newHousing = new Housing(req.body);
    const savedHousing = await newHousing.save().catch((err) => {
        res.status(500).json({ message: err.message });
    });
    if (address && JSON.stringify(address) !== "{}") {
        console.log("Tryinggg this");
        const newHousingAddress = new HousingAddress({ ...address.value, label: address.label, housingId: savedHousing.id })
        await newHousingAddress.save().catch((err) => {
            res.status(500).json({ message: err.message });
        });
    }

    let bucket = `subletsgo/housing-image/${savedHousing.id}`
    let promiseUpload = images.map((base64Image, index) => {
        return imageUpload(index.toString(), base64Image, bucket);
    });
    try {
        await Promise.all(promiseUpload);
    } catch (err) {
        res.status(501).json({ message: err.message });
    }

    if (!res.headersSent && savedHousing) {
        res.status(200).json({ message: "Successfully save housing to db" });
    }
});


module.exports = router;