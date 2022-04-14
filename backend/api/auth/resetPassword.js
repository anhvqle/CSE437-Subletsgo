const express = require('express');
const User = require('../../models/user');
const jwt = require("jsonwebtoken");
require('dotenv').config();

const router = express.Router();

router.post("/resetPassword", async (req, res) => {
    const { code, password } = req.body;

    if (password.length < 8) {
        return res.status(409).json({ message: "* Your new password must contain at least 8 characters." });
    }

    var numberRegularExpression = /^(?=.*[0-9])/;
    if (!numberRegularExpression.test(password)) {
        return res.status(409).json({ message: "* Your new password must contain at least 1 number." });
    }

    var specialCharRegex = /(?=.*[!@#$%^&*])/;
    if (!specialCharRegex.test(password)) {
        return res.status(409).json({ message: "* Your new password must contain at least 1 special character." });
    }
});

module.exports = router;