const express = require('express');
const router = express.Router();

const Housing = require("../../models/housing");

router.delete("/deleteHousingApi/:id", async (req, res) => {
    try {
        const housingId = req.params.id
        const count = await Housing.destroy({ where: { id: housingId } });
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