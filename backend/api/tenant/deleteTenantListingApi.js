const express = require('express');
const Tenant = require('../../models/tenant')

const router = express.Router();

router.delete("/deleteTenantListing", async (req, res) => {
    const { id, userId } = req.body;
    const count = await Tenant.destroy({ where: { id, userId } });

    if (count === 1) {
        res.status(200).json({ message: "Delete successfully" })
    }
    else {
        res.status(400).json({ message: "Record of given user & tenant id not found" })
    }

});

module.exports = router;