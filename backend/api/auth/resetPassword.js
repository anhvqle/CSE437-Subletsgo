const express = require('express');
const User = require('../../models/user');
const jwt = require("jsonwebtoken");
require('dotenv').config();

const router = express.Router();

router.post("/resetPassword", async (req, res) => {
    const { isCorrectCode, email, password } = req.body;
    console.log({
        isCorrectCode, email, password
    });
    if (!isCorrectCode) {
        return res.status(409).json({ message: "You enter the code wrong. Please try again" });
    }
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

    try {
        const user = await User.findOne({ where: { email } })
        if (!user) {
            return res.status(409).json({ message: "* Your email does not exist in our record" });
        }
        console.log({
            user
        });
        await user.update({
            password
        })
        return res.status(200).json({ message: "Password updated successfully. Go to Login tab to login." });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

});

module.exports = router;