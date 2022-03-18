const express = require('express');
const router = express.Router();

const Housing = require('../../models/housing')
const HousingAddress = require('../../models/housingAddress')
const HousingImage = require('../../models/housingImage')
const { getImageUrl } = require("../../services/imagesService")

router.get("/getAllHousingApi", async (req, res) => {
    try {
        let housings = await Housing.findAll({
            raw: true,
            nest: true,
            include: [
                { model: HousingAddress },
                {
                    model: HousingImage, where: {
                        order: 0
                    }
                }
            ]
        });
        housings = housings.map((housing) => {
            let { key: imageName, bucket } = housing['housing-images'];
            housing['housing-images'] = getImageUrl(imageName, bucket);
            housing['housing-address'] = housing['housing-address'].id ? housing['housing-address'] : null;
            return housing
        })
        res.status(200).json(housings);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


module.exports = router;