const express = require('express');
const Marketplace = require('../../models/marketplace');
const MarketplaceImage = require("../../models/marketplaceImage");
const User = require("../../models/user");
const { getImageUrl } = require("../../services/imagesService");

const router = express.Router();

router.get("/getUserMarketplaceListingApi/:id", async (req, res) => {
    try {
        let marketplaces = await Marketplace.findAll({
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
                userId: req.params.id
            }
        });

        marketplaces = marketplaces.map((marketplace) => {
            if (marketplace['marketplace-images'].id) {
                let { key: imageName, bucket } = marketplace['marketplace-images'];
                marketplace['marketplace-images'] = getImageUrl(imageName, bucket);
            } else {
                marketplace['marketplace-images'] = null;
            }
            return marketplace
        })
        res.status(200).json(marketplaces);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;