const express = require('express');
const User = require('../../models/user')
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

router.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    const alreadyExistsUser = await User.findOne({ where: { email } }).catch(
        (err) => {
          console.log("Error: ", err);
        }
    );
    
    if (alreadyExistsUser) {
        return res.status(409).json({ message: "User with email already exists!" });
    }
    
    const newUser = new User({ firstName, lastName, email, password });

    const savedUser = await newUser.save().catch((err) => {
        res.status(500).json({ message: "Cannot register user at the moment!" });
    });
    
    if (savedUser) {
        res.status(200).json({ message: "Thanks for registering!" });
    }
});
  

module.exports = router;