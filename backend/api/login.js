const express = require('express');
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const userWithEmail = await User.findOne({ where: { email } }).catch(
        (err) => {
            console.log("Error: ", err);
        }
    );

    if (!userWithEmail || userWithEmail.password !== password){
        return res.status(400).json({ message: "Email or password does not match!" });
    }

    const jwtToken = jwt.sign(
        {
            id: userWithEmail.id,
            email: userWithEmail.email
        },
        "secret_jwt",
        { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Welcome Back!", token: jwtToken });
});
  

module.exports = router;