const express = require('express');
const Tenant = require('../../models/tenant');

const router = express.Router();

router.get("/getUserTenantListingApi/:id", async (req, res) => {
    const tenants = await Tenant.findAll({
        where: {
            userId: req.params.id
        }
    });

    if (tenants) {
        res.status(200).json({ tenants })
    }
    else {
        return res.status(400)
    }

});

module.exports = router;