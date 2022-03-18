const express = require('express');
const router = express.Router();

const Housing = require('../../models/housing')
const HousingAddress = require('../../models/housingAddress')
const HousingImage = require('../../models/housingImage')
const { imageUpload } = require("../../services/imagesService")

router.post("/newHousingApi", async (req, res) => {
    let { images } = req.body;
    delete req.body.images;
    let { address } = req.body
    delete req.body.address;
    const newHousing = new Housing(req.body);
    const savedHousing = await newHousing.save().catch((err) => {
        res.status(500).json({ message: err.message });
    });
    let housingId = savedHousing.id;
    if (address && JSON.stringify(address) !== "{}") {
        const newHousingAddress = new HousingAddress({ ...address.value, label: address.label, housingId })
        await newHousingAddress.save().catch((err) => {
            res.status(500).json({ message: err.message });
        });
    }
    if (images.length > 0) {
        let bucket = `subletsgo/housing-image/${housingId}`
        let promiseUpload = images.map((base64Image, index) => {
            return imageUpload(index.toString(), base64Image, bucket);
        });
        try {
            let imagesData = await Promise.all(promiseUpload);
            let promiseImagesData = imagesData.map((img, index) => {
                let { ETag: etag, Location: location, Key: key, Bucket: bucket } = img
                const newHousingImage = new HousingImage({
                    order: index,
                    etag,
                    location,
                    key,
                    bucket,
                    housingId
                })
                return newHousingImage.save();
            })
            await Promise.all(promiseImagesData)
        } catch (err) {
            res.status(501).json({ message: err.message });
        }
    }

    if (!res.headersSent && savedHousing) {
        res.status(200).json({ message: "Successfully save housing to db" });
    }
});


module.exports = router;