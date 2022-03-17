const express = require('express');

const router = express.Router();

router.post("/newHousingApi", async (req, res) => {
    // console.log(req.body.images[0]);
    res.status(200).json({ message: "Not done" });
});


module.exports = router;