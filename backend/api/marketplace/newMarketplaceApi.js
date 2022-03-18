const express = require('express');
const Marketplace = require('../../models/marketplace');
const MarketplaceImage = require('../../models/marketplaceImage');
const { imageUpload } = require("../../services/imagesService");

const router = express.Router();

router.post("/newMarketplaceApi", async (req, res) => {
    let { images } = req.body;
    delete req.body.images;

    const newMarketplace = new Marketplace(req.body);

    const savedMarketplace = await newMarketplace.save().catch((err) => {
        res.status(500).json({ message: err.message });
    });

    let marketplaceId = savedMarketplace.id;

    if (images.length > 0) {
        let bucket = `subletsgo/marketplace-image/${marketplaceId}`
        let promiseUpload = images.map((base64Image, index) => {
            return imageUpload(index.toString(), base64Image, bucket);
        });
        try {
            let imagesData = await Promise.all(promiseUpload);
            let promiseImagesData = imagesData.map((img, index) => {
                let { ETag: etag, Location: location, Key: key, Bucket: bucket } = img
                const newMarketplaceImage = new MarketplaceImage({
                    order: index,
                    etag,
                    location,
                    key,
                    bucket,
                    marketplaceId
                })
                return newMarketplaceImage.save();
            })
            await Promise.all(promiseImagesData)
        } catch (err) {
            res.status(501).json({ message: err.message });
        }
    }

    if (!res.headersSent && savedMarketplace) {
        res.status(200).json({ message: "Thanks for creating a new marketplace item!" });
    }
});

module.exports = router;