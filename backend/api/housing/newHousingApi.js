const express = require('express');

const router = express.Router();

router.post("/newHousingApi", async (req, res) => {
    console.log(req.body);
    res.status(200).json({ message: "Not done" });
});


module.exports = router;