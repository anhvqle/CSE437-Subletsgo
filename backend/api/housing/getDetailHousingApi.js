const express = require('express');
const router = express.Router();

const Housing = require('../../models/housing')
const HousingAddress = require('../../models/housingAddress')
const HousingImage = require('../../models/housingImage')
const User = require("../../models/user");
const { getImageUrl } = require("../../services/imagesService")

router.get("/getDetailHousingApi/:id", async (req, res) => {
    try {
        const housingId = req.params.id
        const housingDetails = await Housing.findAll({
            raw: true,
            nest: true,
            include: [
                { model: HousingAddress, required: false },
                { model: HousingImage, required: false },
                { model: User }
            ],
            where: {
                id: housingId
            }
        });
        let housingDetailsAdjusted = { ...housingDetails[0] }

        housingDetailsAdjusted['housing-address'] = housingDetailsAdjusted["housing-address"].id ? housingDetailsAdjusted['housing-address'] : null;
        if (housingDetailsAdjusted["housing-images"].id === null) {
            housingDetailsAdjusted["housing-images"] = [];
            res.status(200).json(housingDetailsAdjusted);
        }

        housingDetailsAdjusted["housing-images"] = housingDetails.map((housing) => housing["housing-images"])
        housingDetailsAdjusted["housing-images"] = housingDetailsAdjusted["housing-images"].map((housingImage) => {
            let { key: imageName, bucket } = housingImage;
            return getImageUrl(imageName, bucket);
        })
        res.status(200).json(housingDetailsAdjusted);
    } catch (err) {
        if (!res.headersSent)
            res.status(500).json({ message: err.message });
    }
});

module.exports = router;