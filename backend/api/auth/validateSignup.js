const express = require('express');
const User = require('../../models/user')
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require('dotenv').config();

const router = express.Router();

function generateCode() {
    return Math.floor(100000 + Math.random() * 900000);
}

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

function sendCode(email, firstName, code) {
    let emailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Registration Verification Code", 
        text: `Hi ${firstName}, \n\nTo complete your registration, please enter this code on our website: ${code}.\n\nRegards,\nThe WUSTL-Subletsgo Team`,
    };

    transporter.sendMail(emailOptions, function (error, data) {
        if (error) {
            console.log("Error: ", error);
        } else {
            console.log("Email sent!");
        }
    });
}

router.post("/validateSignup", async (req, res) => {
    const { firstName, phoneNumber, email, password } = req.body;

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

    let code = generateCode();
    res.status(200).json({});
    sendCode(email, firstName, code);
});


module.exports = router;