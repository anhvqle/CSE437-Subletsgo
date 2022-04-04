const express = require('express');
const User = require('../../models/user')
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
require('dotenv').config();

const router = express.Router();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

function sendConfirmationEmail(email, firstName) {
    let emailOptions = {
        from: process.env.EMAIL,
        to: email,
        subject: "Your registration is complete",
        text: `Dear ${firstName}, \n\nThank you for completing your registration with WUSTL-Subletsgo. This email serves as a confirmation that your account is activated and you have successfully signed up for http://18.217.249.83:3000/. You can now login to your account using the email address and password you provided during registration.\n\nRegards,\nThe WUSTL-Subletsgo Team`,
    };

    transporter.sendMail(emailOptions, function (error, data) {
        if (error) {
            console.log("Error: ", error);
        } else {
            console.log("Email sent!");
        }
    });
}

router.post("/signup", async (req, res) => {
    const { firstName, lastName, phoneNumber, email, password } = req.body;

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

    const newUser = new User({ firstName, lastName, phoneNumber, email, password });

    const savedUser = await newUser.save().catch((err) => {
        res.status(500).json({ message: "* Cannot register user at the moment!" });
    });

    if (savedUser) {
        const userData = savedUser.dataValues;
        delete userData.password;
        const token = jwt.sign(
            userData,
            "secret_jwt",
            { expiresIn: "1d" }
        );

        res.status(200).json({ token, message: "Thanks for registering!" });
        sendConfirmationEmail(email, firstName);
    }
});


module.exports = router;