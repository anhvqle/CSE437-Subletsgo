const express = require('express');
const router = express.Router();

const Marketplace = require('../../models/marketplace');

router.delete("/deleteMarketplaceApi/:id", async (req, res) => {
    try {
        const marketplaceId = req.params.id
        const count = await Marketplace.destroy({ where: { id: marketplaceId } });
        if (count === 1) {
            res.status(200).json({ message: "Delete successfully" })
        } else {
            throw new Error("Delete failed - record not found")
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;