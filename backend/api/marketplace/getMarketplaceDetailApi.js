const express = require('express');
const Marketplace = require('../../models/marketplace');
const MarketplaceImage = require("../../models/marketplaceImage");
const User = require("../../models/user");
const { getImageUrl } = require("../../services/imagesService");

const router = express.Router();

router.get("/getMarketplaceDetailApi/:id", async (req, res) => {
    try {
        const marketplaceId = req.params.id
        const marketplaceDetails = await Marketplace.findAll({
            raw: true,
            nest: true,
            include: [
                {
                    model: MarketplaceImage, required: false, where: {
                        order: 0
                    }
                },
                { model: User }
            ],
            where: {
                id: marketplaceId
            }
        });

        let marketplaceDetailsAdjusted = { ...marketplaceDetails[0] }

        if (marketplaceDetailsAdjusted["marketplace-images"].id === null) {
            marketplaceDetailsAdjusted["marketplace-images"] = [];
            res.status(200).json(marketplaceDetailsAdjusted);
        }

        marketplaceDetailsAdjusted["marketplace-images"] = marketplaceDetails.map((marketplace) => marketplace["marketplace-images"])
        marketplaceDetailsAdjusted["marketplace-images"] = marketplaceDetailsAdjusted["marketplace-images"].map((marketplaceImage) => {
            let { key: imageName, bucket } = marketplaceImage;
            return getImageUrl(imageName, bucket);
        })

        res.status(200).json(marketplaceDetailsAdjusted);
    } catch (err) {
        if (!res.headersSent)
            res.status(500).json({ message: err.message });
    }
});

module.exports = router;