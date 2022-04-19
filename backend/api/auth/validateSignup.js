const express = require('express');
const User = require('../../models/user')
const jwt = require("jsonwebtoken");
require('dotenv').config();

const router = express.Router();

router.post("/validateSignup", async (req, res) => {
    const { phoneNumber, email, password } = req.body;

    if (!email.includes("@wustl.edu")) {
        return res.status(409).json({ message: "* Please use your WUSTL email to sign up." });
    }

    var phoneno = /^\d{10}$/;
    if (!phoneno.test(phoneNumber)) {
        return res.status(409).json({ message: "* Phone number should only contain 10 integer numbers." });
    }

    if (password.length < 8) {
        return res.status(409).json({ message: "* Your password must contain at least 8 characters." });
    }

    var numberRegularExpression = /^(?=.*[0-9])/;
    if (!numberRegularExpression.test(password)) {
        return res.status(409).json({ message: "* Your password must contain at least 1 number." });
    }

    var specialCharRegex = /(?=.*[!@#$%^&*])/;
    if (!specialCharRegex.test(password)) {
        return res.status(409).json({ message: "* Your password must contain at least 1 special character." });
    }

    const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
        (err) => {
            return res.status(409).json({ message: "* This e-mail address is already in use." });
        }
    );

    if (alreadyExistsUser) {
        return res.status(409).json({ message: "* User with email already exists!" });
    }

    return res.status(200).json({});
});


module.exports = router;