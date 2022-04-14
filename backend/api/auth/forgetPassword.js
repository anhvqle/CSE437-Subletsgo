const express = require('express');
const User = require('../../models/user');
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
        subject: "Reset Your Password",
        text: `Hi ${firstName}, \n\nTo reset your password, please enter this code on our website: ${code}.\n\nRegards,\nThe WUSTL-Subletsgo Team`,
    };

    transporter.sendMail(emailOptions, function (error, data) {
        if (error) {
            console.log("Error: ", error);
        } else {
            console.log("Email sent!");
        }
    });
}

router.post("/forgetPassword", async (req, res) => {
    const { email } = req.body;

    if (!email.includes("@wustl.edu")) {
        return res.status(409).json({ message: "* Please enter a valid WUSTL email to reset your password." });
    }

    const userWithEmail = await User.findOne({ where: { email } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (!userWithEmail) {
        return res.status(409).json({ message: "* This email is not registered with us." });
    }
    let code = generateCode();
    sendCode(email, userWithEmail.firstName, code);

    return res.status(200).json({ code: code, message: "* Please check your email for the code." });
});

module.exports = router;