const express = require('express');
const User = require('../../models/user')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { firstName, lastName, phoneNumber, email, password } = req.body;

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
            console.log("Error: ", err);
        }
    );

    if (alreadyExistsUser) {
        return res.status(409).json({ message: "User with email already exists!" });
    }

    const newUser = new User({ firstName, lastName, phoneNumber, email, password });

    const savedUser = await newUser.save().catch((err) => {
        res.status(500).json({ message: "Cannot register user at the moment!" });
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
    }
});


module.exports = router;